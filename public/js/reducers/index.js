import { combineReducers } from 'redux'
import content from './contentReducer'
import navigation from './navReducer'

export default combineReducers({
    content,
    navigation
})