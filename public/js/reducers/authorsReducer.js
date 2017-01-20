import { SAVE_AUTHORS, SET_DIRTY } from '../constants/authors.js'

const initialState = {
    authorsCollection: [
        {
            lastName:"Фамилия один",
            firstName:"Имя один",
            birthDate:'01/01/2001',
            email: "example1@example.com",
            books: "books list 1"
        },
        {
            lastName:"Фамилия два",
            firstName:"Имя два",
            birthDate:'02/02/2002',
            email: "example2@example.com",
            books: "books list 2"
        },
        {
            lastName:"Фамилия три",
            firstName:"Имя три",
            birthDate:'03/03/2003',
            email: "example3@example.com",
            books: "books list 3"
        },
        {
            lastName:"Фамилия четыре",
            firstName:"Имя четыре",
            birthDate:'04/04/2004',
            email: "example4@example.com",
            books: "books list 4"
        },
        {
            lastName:"Фамилия пять",
            firstName:"Имя пять",
            birthDate:'05/05/2005',
            email: "example5@example.com",
            books: "books list 5"
        },
        {
            lastName:"Фамилия шесть",
            firstName:"Имя шесть",
            birthDate:'06/06/2006',
            email: "example6@example.com",
            books: "books list 6"
        },
        {
            lastName:"Фамилия семь",
            firstName:"Имя семь",
            birthDate:'07/07/2007',
            email: "example7@example.com",
            books: "books list 7"
        },
        {
            lastName:"Фамилия восемь",
            firstName:"Имя восемь",
            birthDate:'08/08/2008',
            email: "example8@example.com",
            books: "books list 8"
        },
        {
            lastName:"Фамилия девять",
            firstName:"Имя девять",
            birthDate:'09/09/2009',
            email: "example9@example.com",
            books: "books list 9"
        },
        {
            lastName:"Фамилия десять",
            firstName:"Имя десять",
            birthDate:'10/10/2010',
            email: "example10@example.com",
            books: "books list 10"
        },
        {
            lastName:"Фамилия одиннадцать",
            firstName:"Имя одиннадцать",
            birthDate:'11/11/2011',
            email: "example11@example.com",
            books: "books list 11"
        },
        {
            lastName:"Фамилия двенадцать",
            firstName:"Имя двенадцать",
            birthDate:'12/12/2012',
            email: "example12@example.com",
            books: "books list 12"
        }
       ],
        isDirty: false
    };

export default function authorsState(state = initialState, action) {
    switch (action.type) {
        case SAVE_AUTHORS:

            console.log("Got new authors array:", action.payload);

            return {...state, authorsCollection : action.payload, isDirty: false};

        case SET_DIRTY:

            console.log("Set dirty:", action.payload);

            return {...state, isDirty: action.payload};

        default:
            return state;
    }
}