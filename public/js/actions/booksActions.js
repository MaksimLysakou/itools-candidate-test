import { SAVE_BOOKS, SET_BOOK_DIRTY } from '../constants/books.js'

export function saveBooks(booksList) {

    return {
        type: SAVE_BOOKS,
        payload: booksList
    }
}
export function setDirty(isDirty) {

    return {
        type: SET_BOOK_DIRTY,
        payload: isDirty
    }
}
