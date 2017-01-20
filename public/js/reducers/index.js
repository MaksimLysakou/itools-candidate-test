import { combineReducers } from 'redux'
import navigation from './navReducer.js'
import authors from './authorsReducer.js'
import books from './booksReducer'


export default combineReducers({
    navigation,
    authors,
    books
})