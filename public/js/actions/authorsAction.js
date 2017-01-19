import { SAVE_AUTHORS } from '../constants/authors'

export function saveAuthors(authorsList) {

    return {
        type: SAVE_AUTHORS,
        payload: authorsList
    }
}