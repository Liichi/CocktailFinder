import { ActionTypes } from '../actions/search'
import {CocktailData} from '../components/cocktail/cocktailData'

export interface SearchState {
    cocktails: CocktailData[],
    isFetching: boolean,
    searchText: string,
    error: boolean
}

export const initialState: SearchState = {
    cocktails: [],
    isFetching: false,
    searchText: '',
    error: false
};

const fetchReducer = (state: SearchState = initialState, action: ActionTypes): SearchState => {
    switch (action.type) {
        case 'CANCEL_FETCH':
            return { cocktails: [], isFetching: false, searchText: '', error: false}
        case 'CHANGE_SEARCH_TEXT':
            return { cocktails: state.cocktails, isFetching: state.isFetching, searchText: action.searchText, error: false}
        case 'START_FETCH':
            return { cocktails: state.cocktails, isFetching: true,searchText: action.searchText, error: state.error}
        case 'SUCCESS_FETCH':
            return { cocktails: action.cocktails, isFetching: false,searchText: state.searchText, error: false}
        case 'ERROR_FETCH':
            return { cocktails: state.cocktails, isFetching: false,searchText: state.searchText, error: true}
        default:
            return state;
    }
}

export default fetchReducer;