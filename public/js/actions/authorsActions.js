import { SAVE_AUTHORS, SET_AUTHOR_DIRTY } from '../constants/authors.js'

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
