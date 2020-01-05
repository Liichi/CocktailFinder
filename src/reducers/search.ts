import { combineReducers } from 'redux'
import { ActionTypes } from '../actions/search'
import {CocktailData} from '../components/cocktail/cocktailData'

export interface State {
  cocktails: CocktailData[],
  isFetching: boolean
}

export const initialState: State = {
  cocktails: [],
  isFetching: false
};

const fetchReducer = (state: State = initialState, action: ActionTypes): State => {
  console.log('fetch Reducer');
  switch (action.type) {
    case 'CANCEL_FETCH':
      console.log('cancel action');
      return { cocktails: [], isFetching: false }
    case 'START_FETCH':
      //TODO FETCH & DISPLAY LOAD SPIN
      console.log('search action');
      return { cocktails: [], isFetching: true }
    case 'SUCCESS_FETCH':
      //TODO FETCH
      console.log('success action');
      return { cocktails: [], isFetching: false }
    case 'ERROR_FETCH':
      console.log('ERROR');
      return { cocktails: [], isFetching: false }
    default:
      return state;
  }
}

export default fetchReducer;
/*export default combineReducers<State>({
  fetchReducer
})*/