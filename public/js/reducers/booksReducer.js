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


export default function booksState(state = initialState, action) {

    switch (action.type) {

        case GET_BOOKS_REQUEST:
            return { ...state, booksCollection: action.payload, fetching: true };

        case GET_BOOKS_SUCCESS:
            return { ...state, booksCollection: action.payload, fetching: false };

        case SAVE_BOOKS:
            return {...state, booksCollection : action.payload, isDirty: false};

        case SAVE_AUTHORS:
            let tempBooksCollection = [...state.booksCollection];
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

            return {...state, booksCollection : tempBooksCollection, isDirty: false};

        case SET_BOOK_DIRTY:
            return {...state, isDirty: action.payload};

        default:
            return state;
    }
}