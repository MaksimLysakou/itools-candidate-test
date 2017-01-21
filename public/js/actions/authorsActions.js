import { SAVE_AUTHORS, SET_AUTHOR_DIRTY, GET_BOOK_INFO } from '../constants/authors.js'

export function saveAuthors(authorsList) {

    return {
        type: SAVE_AUTHORS,
        payload: authorsList
    }
}
export function setDirty(isDirty) {

    return {
        type: SET_AUTHOR_DIRTY,
        payload: isDirty
    }
}
export function getBookInfo(id) {

    return {
        type: GET_BOOK_INFO,
        payload: id
    }
}
