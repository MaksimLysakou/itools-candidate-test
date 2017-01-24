import  {
            GET_BOOKS_REQUEST,
            GET_BOOKS_SUCCESS,
            SAVE_BOOKS,
            SET_BOOK_DIRTY
        } from '../constants/books.js'

export function getBooks() {

    return (dispatch) => {
        dispatch({
            type: GET_BOOKS_REQUEST,
            payload: []
        });

        fetch('/api/books')
            .then((response) => response.json())
            .then((responseJson) => {
                responseJson["books"].forEach((element) => {
                    element.author = "[" + element.author.toString() + "]";
                });

                dispatch({
                    type: GET_BOOKS_SUCCESS,
                    payload: responseJson["books"]
                })
            })
    }
}

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
