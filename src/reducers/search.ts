import { combineReducers } from 'redux'
import { ActionTypes } from '../actions/search'
import {CocktailData} from '../components/cocktail/cocktailData'

export interface SearchState {
  cocktails: CocktailData[],
  isFetching: boolean,
  searchText: string
}

export const initialState: SearchState = {
  cocktails: [],
  isFetching: false,
  searchText: ''
};

const fetchReducer = (state: SearchState = initialState, action: ActionTypes): SearchState => {
  switch (action.type) {
    case 'CANCEL_FETCH':
      console.log('cancel action');
      return { cocktails: state.cocktails, isFetching: false, searchText: state.searchText}
    case 'START_FETCH':
      //TODO FETCH & DISPLAY LOAD SPIN
      console.log('search action');
      return { cocktails: state.cocktails, isFetching: true,searchText: action.searchText}
    case 'SUCCESS_FETCH':
      console.log('success action');
      return { cocktails: action.cocktails, isFetching: false,searchText: state.searchText}
    case 'ERROR_FETCH':
      console.log('ERROR');
      return { cocktails: state.cocktails, isFetching: false,searchText: state.searchText}
    default:
      return state;
  }
}

export default fetchReducer;
/*export default combineReducers<State>({
  fetchReducer
})*/