import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/indexReducer'

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState)
    return store
}