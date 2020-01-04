import { combineReducers } from 'redux'
import { Action } from '../actions/search'

export interface CocktailData {
  name: string,
  thumbURL: string,
  id: number
}

export interface State {
  cocktails: CocktailData[],
  isFetching: boolean
}

export const initialState: State = {
  cocktails: [],
  isFetching: false
};

const fetchReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'CANCEL_FETCH':
      return { cocktails: [], isFetching: false }
    case 'START_FETCH':
      //TODO FETCH
      return { cocktails: [], isFetching: true }
    default:
      return state;
  }
}

export default combineReducers<State>({
  fetchReducer
})