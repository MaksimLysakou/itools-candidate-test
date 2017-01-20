import { SAVE_BOOKS, SET_BOOK_DIRTY } from '../constants/books.js'

const initialState = {
    booksCollection: [
        {
            name: "Книга один",
            publishing: "Изд. один",
            ebook: false,
            year: 2001,
            isbn: "111-111-111",
            pages: 1,
            author: "Автор один"
        },
        {
            name: "Книга два",
            publishing: "Изд. два",
            ebook: true,
            year: 2002,
            isbn: "222-222-222",
            pages: 2,
            author: "Автор два"
        },
        {
            name: "Книга три",
            publishing: "Изд. три",
            ebook: true,
            year: 2003,
            isbn: "333-333-333",
            pages: 3,
            author: "Автор три"
        },
        {
            name: "Книга четыре",
            publishing: "Изд. четыре",
            ebook: false,
            year: 2004,
            isbn: "444-444-444",
            pages: 4,
            author: "Автор четыре"
        },
        {
            name: "Книга пять",
            publishing: "Изд. пять",
            ebook: true,
            year: 2005,
            isbn: "555-555-555",
            pages: 5,
            author: "Автор пять"
        }
       ],
        isDirty: false
    };

export default function booksState(state = initialState, action) {
    switch (action.type) {
        case SAVE_BOOKS:

            console.log("Got new books array:", action.payload);

            return {...state, booksCollection : action.payload, isDirty: false};

        case SET_BOOK_DIRTY:

            console.log("Set book dirty:", action.payload);

            return {...state, isDirty: action.payload};

        default:
            return state;
    }
}