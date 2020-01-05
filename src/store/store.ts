import { createStore, combineReducers, applyMiddleware } from 'redux'
import search, { SearchState } from '../reducers/search'
import thunk from 'redux-thunk'

export interface RootState {
    search: SearchState
}

export default createStore(combineReducers<RootState>({
    search
}), applyMiddleware(thunk))