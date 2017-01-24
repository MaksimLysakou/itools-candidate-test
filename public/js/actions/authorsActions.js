import {
            GET_AUTHORS_REQUEST,
            GET_AUTHORS_SUCCESS,
            SAVE_AUTHORS,
            SET_AUTHOR_DIRTY
       } from '../constants/authors.js'

export function getAuthors() {

    return (dispatch) => {
        dispatch({
            type: GET_AUTHORS_REQUEST,
            payload: []
        });

        fetch('/api/authors')
            .then((response) => response.json())
            .then((responseJson) => {
                responseJson["authors"].forEach((element) => {
                    element.book = "[" + element.book.toString() + "]";
                    let date = new Date(element.birthDate);
                    element.birthDate = ('0' + date.getDate()).slice(-2) + '/' +
                                        ('0' + (date.getMonth() + 1)).slice(-2) + '/' +
                                        date.getFullYear(); //convert date to DD/MM/YYYY format
                });

                dispatch({
                    type: GET_AUTHORS_SUCCESS,
                    payload: responseJson["authors"]
                })
            })
    }
}

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


