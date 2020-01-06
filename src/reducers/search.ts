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
            return { cocktails: [], isFetching: false, searchText: '', error: false, needUpdate:state.needUpdate}
        case 'CHANGE_SEARCH_TEXT':
            return { cocktails: state.cocktails, isFetching: state.isFetching, searchText: action.searchText, error: false, needUpdate:state.needUpdate}
        case 'START_FETCH':
            return { cocktails: state.cocktails, isFetching: true,searchText: action.searchText, error: state.error, needUpdate:state.needUpdate}
        case 'SUCCESS_FETCH':
            //if searchText has changed need to update
            if(action.searchText === state.searchText)
                return { cocktails: action.cocktails, isFetching: false,searchText: state.searchText, error: false, needUpdate :false}
            else return { cocktails: action.cocktails, isFetching: false,searchText: state.searchText, error: false, needUpdate : true}
        case 'FETCH_ERROR':
            return { cocktails: state.cocktails, isFetching: false,searchText: state.searchText, error: true, needUpdate:state.needUpdate}
        default:
            return state;
    }
};

export default fetchReducer;