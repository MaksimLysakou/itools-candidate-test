import { SAVE_BOOKS, SET_BOOK_DIRTY } from '../constants/books.js'
import { SAVE_AUTHORS } from '../constants/authors.js'

const initialState = {
    booksCollection: [
        {
            _id:1,
            name: "Книга один",
            publishing: "Изд. один",
            ebook: false,
            year: 2001,
            isbn: "111-111-111",
            pages: 1,
            author: "[1,3,10]"
        },
        {
            _id:2,
            name: "Книга два",
            publishing: "Изд. два",
            ebook: true,
            year: 2002,
            isbn: "222-222-222",
            pages: 2,
            author: "[1,2]"
        },
        {
            _id:3,
            name: "Книга три",
            publishing: "Изд. три",
            ebook: true,
            year: 2003,
            isbn: "333-333-333",
            pages: 3,
            author: "[1,6]"
        },
        {
            _id:4,
            name: "Книга четыре",
            publishing: "Изд. четыре",
            ebook: false,
            year: 2004,
            isbn: "444-444-444",
            pages: 4,
            author: "[5,6]"
        },
        {
            _id:5,
            name: "Книга пять",
            publishing: "Изд. пять",
            ebook: true,
            year: 2005,
            isbn: "555-555-555",
            pages: 5,
            author: "[3,5]"
        }
       ],
        isDirty: false
    };

export default function booksState(state = initialState, action) {
    switch (action.type) {
        case SAVE_BOOKS:
            return {...state, booksCollection : action.payload, isDirty: false};

        // case SAVE_AUTHORS:
        //     //action.payload
        //
        //     let tempBooksCollection = {...state.booksCollection};
        //     tempBooksCollection.forEach( (element) => {
        //
        //     });
        //
        //     return {...state, authorsCollection : action.payload, isDirty: false};

        case SET_BOOK_DIRTY:
            return {...state, isDirty: action.payload};

        default:
            return state;
    }
}