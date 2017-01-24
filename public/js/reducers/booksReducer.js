import  {
    GET_BOOKS_REQUEST,
    GET_BOOKS_SUCCESS,
    SAVE_BOOKS,
    SET_BOOK_DIRTY
} from '../constants/books.js'
import { SAVE_AUTHORS } from '../constants/authors.js'

const initialState = {
    booksCollection: [],
        isDirty: false
    };

function syncBooks(oldBooks, newBooks) {

    function validateJSON(text) {
        //Make JSON great again!

        try {
            return JSON.parse(text);;
        } catch (error) {
            return [];
        }
    }

    // Check for creating new book
    newBooks.forEach( (newBook) => {
        let isNew = true;
        oldBooks.forEach( (oldBook) => {
            if(newBook["_id"] == oldBook["_id"] || !newBook["_id"]) {
                isNew = false;
            }
        });

        if(isNew) {
            console.log("create");
            let sentBook = {};

            if(sentBook.ebook == undefined) {
                sentBook = {...newBook, author: validateJSON(newBook.author), ebook: false};
            } else {
                sentBook = {...newBook, author: validateJSON(newBook.author)};
            }

            fetch('/api/books', {
                method: 'post',
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify(sentBook)
            });
        }
    });

    // Check for deleting old book
    oldBooks.forEach( (oldBook) => {
        let isRemoved = true;
        newBooks.forEach( (newBook) => {
            if(newBook["_id"] == oldBook["_id"]) {
                isRemoved = false;
            }
        });

        console.log("remove");
        if(isRemoved) {
            fetch('/api/books/' + oldBook["_id"], {
                method: 'delete',
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify(oldBook)
            });
        }
    });

    oldBooks.forEach( (oldBook) => {
        let isRemoved = true;
        newBooks.forEach((newBook) => {
            if (newBook["_id"] == oldBook["_id"]) {
                if(JSON.stringify(newBook) != JSON.stringify(oldBook)) {

                    let sentBook = {};

                    if(sentBook.ebook == undefined) {
                        sentBook = {...newBook, author: validateJSON(newBook.author), ebook: false};
                    } else {
                        sentBook = {...newBook, author: validateJSON(newBook.author)};
                    }

                    fetch('/api/books/' + sentBook["_id"], {
                        method: 'put',
                        headers: {
                            "Content-type": "application/json; charset=UTF-8"
                        },
                        body: JSON.stringify(sentBook)
                    });
                }
            }
        });
    });

    let tempBooks = [];
    newBooks.forEach( (element) => {
       if(element["_id"] && element["_id"].length > 0) {
           tempBooks.push(element);
       }
    });

    return tempBooks;
}

export default function booksState(state = initialState, action) {

    switch (action.type) {

        case GET_BOOKS_REQUEST:
            return { ...state, booksCollection: action.payload, fetching: true };

        case GET_BOOKS_SUCCESS:
            return { ...state, booksCollection: action.payload, fetching: false };

        case SAVE_BOOKS:
            return {...state, booksCollection : syncBooks(state.booksCollection, action.payload), isDirty: false};

        case SAVE_AUTHORS:
            let tempBooksCollection = JSON.parse(JSON.stringify(state.booksCollection));
            tempBooksCollection.forEach( (book) => {
               book.author = [];
            });

            action.payload.forEach( (author) => {
                try {
                    const booksIds = JSON.parse(author.book);

                    if(booksIds instanceof Array) {
                        booksIds.forEach( (bookId) => {
                            tempBooksCollection.forEach( (book) => {
                                 if(book["_id"] == bookId) {
                                     book.author.push(author["_id"]);
                                 }
                            });
                        });
                    }

                } catch (error) {
                    //do nothing
                }
            });

            tempBooksCollection.forEach( (book) => {
                book.author = "[" + book.author + "]";
            });

            return {...state, booksCollection : syncBooks(state.booksCollection, tempBooksCollection), isDirty: false};

        case SET_BOOK_DIRTY:
            return {...state, isDirty: action.payload};

        default:
            return state;
    }
}