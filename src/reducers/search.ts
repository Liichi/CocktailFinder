import { ActionTypes } from '../actions/search'
import {CocktailData} from '../components/cocktail/cocktailData'

export interface SearchState {
    cocktails: CocktailData[],
    isFetching: boolean,
    searchText: string,
    error: boolean,
    needUpdate : boolean
};

export const initialState: SearchState = {
    cocktails: [],
    isFetching: false,
    searchText: '',
    error: false,
    needUpdate : false
};

const fetchReducer = (state: SearchState = initialState, action: ActionTypes): SearchState => {
    switch (action.type) {
        case 'CANCEL_FETCH':
            return { ...state , cocktails: [], isFetching: false, searchText: '', error: false}
        case 'CHANGE_SEARCH_TEXT':
            return { ...state, searchText: action.searchText, error: false}
        case 'START_FETCH':
            return { ...state, isFetching: true,searchText: action.searchText}
        case 'SUCCESS_FETCH':
            //if searchText has changed need to update
            return { ...state, cocktails: action.cocktails, isFetching: false, error: false, needUpdate : action.searchText != state.searchText}
        case 'FETCH_ERROR':
            return { ...state, isFetching: false, error: true}
        default:
            return state;
    }
};

export default fetchReducer;