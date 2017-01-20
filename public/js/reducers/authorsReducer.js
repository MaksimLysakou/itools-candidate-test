import { SAVE_AUTHORS } from '../constants/authors.js'

const initialState = {
    authorsCollection: [
            [ "Фамилия один",        "Имя один",        "01.01.2001", "example1@example.com",  "books list 1" ],
            [ "Фамилия два",         "Имя два",         "02.02.2002", "example2@example.com",  "books list 2" ],
            [ "Фамилия три",         "Имя три",         "03.03.2003", "example3@example.com",  "books list 3" ],
            [ "Фамилия четыре",      "Имя четыре",      "04.04.2004", "example4@example.com",  "books list 4" ],
            [ "Фамилия пять",        "Имя пять",        "05.05.2005", "example5@example.com",  "books list 5" ],
            [ "Фамилия шесть",       "Имя шесть",       "06.06.2006", "example6@example.com",  "books list 6" ],
            [ "Фамилия семь",        "Имя семь",        "07.07.2007", "example7@example.com",  "books list 7" ],
            [ "Фамилия восемь",      "Имя восемь",      "08.08.2008", "example8@example.com",  "books list 8" ],
            [ "Фамилия девять",      "Имя девять",      "09.09.2009", "example9@example.com",  "books list 9" ],
            [ "Фамилия десять",      "Имя десять",      "10.10.2010", "example10@example.com", "books list 10" ],
            [ "Фамилия одиннадцать", "Имя одиннадцать", "11.11.2011", "example11@example.com", "books list 11" ],
            [ "Фамилия двенадцать",  "Имя двенадцать",  "12.12.2012", "example12@example.com", "books list 12" ]
       ],
        isDirty: false
    };

export default function authorsState(state = initialState, action) {
    switch (action.type) {
        case SAVE_AUTHORS:

            console.log("Got new authors array:", action.payload);

            return state;


        default:
            return state;
    }
}