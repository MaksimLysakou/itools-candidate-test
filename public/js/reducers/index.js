import { combineReducers } from 'redux'
import navigation from './navReducer'
import authors from './authorsReducer'


export default combineReducers({
    navigation,
    authors
})