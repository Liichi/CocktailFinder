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
      return { cocktails: [], isFetching: false, searchText: ''}
    case 'START_FETCH':
      return { cocktails: state.cocktails, isFetching: true,searchText: action.searchText}
    case 'SUCCESS_FETCH':
      return { cocktails: action.cocktails, isFetching: false,searchText: state.searchText}
    case 'ERROR_FETCH':
      return { cocktails: state.cocktails, isFetching: false,searchText: state.searchText}
    default:
      return state;
  }
}

export default fetchReducer;