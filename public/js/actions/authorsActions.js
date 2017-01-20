import { SAVE_AUTHORS, SET_DIRTY } from '../constants/authors.js'

export function saveAuthors(authorsList) {

    return {
        type: SAVE_AUTHORS,
        payload: authorsList
    }
}
export function setDirty(isDirty) {

    return {
        type: SET_DIRTY,
        payload: isDirty
    }
}
