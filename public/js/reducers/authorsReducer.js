import {
            GET_AUTHORS_REQUEST,
            GET_AUTHORS_SUCCESS,
            SAVE_AUTHORS,
            SET_AUTHOR_DIRTY
       } from '../constants/authors.js'
import { SAVE_BOOKS } from '../constants/books.js'

const initialState = { authorsCollection: [], isDirty: false, fetching: false };
    /*{
    authorsCollection: [
        {
            _id:1,
            lastName:"ФамилияОдин",
            firstName:"ИмяОдин",
            birthDate:'01/01/2001',
            email: "example1@example.com",
            book: "[1,2,3]"
        },
        {
            _id:2,
            lastName:"ФамилияДва",
            firstName:"ИмяДва",
            birthDate:'02/02/2002',
            email: "example2@example.com",
            book: "[2]"
        },
        {
            _id:3,
            lastName:"ФамилияТри",
            firstName:"ИмяТри",
            birthDate:'03/03/2003',
            email: "example3@example.com",
            book: "[1,5]"
        },
        {
            _id:4,
            lastName:"ФамилияЧетыре",
            firstName:"ИмяЧетыре",
            birthDate:'04/04/2004',
            email: "example4@example.com",
            book: "[]"
        },
        {
            _id:5,
            lastName:"ФамилияПять",
            firstName:"ИмяПять",
            birthDate:'05/05/2005',
            email: "example5@example.com",
            book: "[4,5]"
        },
        {
            _id:6,
            lastName:"ФамилияШесть",
            firstName:"ИмяШесть",
            birthDate:'06/06/2006',
            email: "example6@example.com",
            book: "[3,4]"
        },
        {
            _id:7,
            lastName:"ФамилияСемь",
            firstName:"ИмяСемь",
            birthDate:'07/07/2007',
            email: "example7@example.com",
            book: "[]"
        },
        {
            _id:8,
            lastName:"ФамилияВосемь",
            firstName:"ИмяВосемь",
            birthDate:'08/08/2008',
            email: "example8@example.com",
            book: "[]"
        },
        {
            _id:9,
            lastName:"ФамилияДевять",
            firstName:"ИмяДевять",
            birthDate:'09/09/2009',
            email: "example9@example.com",
            book: "[]"
        },
        {
            _id:10,
            lastName:"ФамилияДесять",
            firstName:"ИмяДесять",
            birthDate:'10/10/2010',
            email: "example10@example.com",
            book: "[1]"
        },
        {
            _id:11,
            lastName:"ФамилияОдиннадцать",
            firstName:"ИмяОдиннадцать",
            birthDate:'11/11/2011',
            email: "example11@example.com",
            book: "[]"
        },
        {
            _id:12,
            lastName:"ФамилияДвенадцать",
            firstName:"ИмяДвенадцать",
            birthDate:'12/12/2012',
            email: "example12@example.com",
            book: "[]"
        }
       ],
        isDirty: false
    };*/

export default function authorsState(state = initialState, action) {
    switch (action.type) {

        case GET_AUTHORS_REQUEST:
            return { ...state, authorsCollection: action.payload, fetching: true };

        case GET_AUTHORS_SUCCESS:
            return { ...state, authorsCollection: action.payload, fetching: false };

        case SAVE_AUTHORS:
            return {...state, authorsCollection : action.payload, isDirty: false};

        case SAVE_BOOKS:
            let tempAuthorsCollection = [...state.authorsCollection];
            tempAuthorsCollection.forEach( (author) => {
                author.book = [];
            });

            action.payload.forEach( (book) => {
                try {
                    const authorsIds = JSON.parse(book.author);

                    if(authorsIds instanceof Array) {
                        authorsIds.forEach( (authorId) => {
                            tempAuthorsCollection.forEach( (author) => {
                                if(author["_id"] == authorId) {
                                    author.book.push(book["_id"]);
                                }
                            });
                        });
                    }

                } catch (error) {
                    //do nothing
                }
            });

            tempAuthorsCollection.forEach( (author) => {
                author.book = "[" + author.book + "]";
            });

            return {...state, authorsCollection : tempAuthorsCollection, isDirty: false};

        case SET_AUTHOR_DIRTY:
            return {...state, isDirty: action.payload};

        default:
            return state;
    }
}