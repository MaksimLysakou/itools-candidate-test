import { combineReducers } from 'redux'
import navigation from './navReducer.js'
import authors from './authorsReducer.js'


export default combineReducers({
    navigation,
    authors
})