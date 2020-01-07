import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux';
import {RootState} from '../store/store'
import store from '../store/store';
import {CocktailData} from '../components/cocktail/cocktailData';
import Config from '../../config'

export interface StartFetch {
    type: 'START_FETCH',
    searchText: string
};

export interface ChangeSearchText {
    type: 'CHANGE_SEARCH_TEXT',
    searchText: string
};

export interface SuccessFetch {
    type: 'SUCCESS_FETCH',
    cocktails: CocktailData[],
    searchText : string
};

export interface FetchError {
    type: 'FETCH_ERROR'
};

export interface CancelFetch {
    type: 'CANCEL_FETCH'
};

export type ActionTypes = StartFetch | CancelFetch | FetchError | SuccessFetch | ChangeSearchText;

export function successFetchAction(searchText:string, newCocktails: CocktailData[]): ActionTypes {
    return {
        type: 'SUCCESS_FETCH',
        cocktails: newCocktails,
        searchText: searchText
    }
}

export function startFetchAction(searchText: string): ActionTypes {
    return {
        type: 'START_FETCH',
        searchText
    }
}

export function cancelFetchAction(): ActionTypes {
    return {
        type: 'CANCEL_FETCH'
    }
}

export function fetchErrorAction(): ActionTypes {
    return {
        type: 'FETCH_ERROR'
    }
}

export function changeSearchTextAction(searchText : string): ActionTypes {
    return {
        type: 'CHANGE_SEARCH_TEXT',
        searchText
    }
}

export const startFetch = (searchText: string): ThunkAction<void, RootState, null, Action > => async dispatch => {
    //if already fetching just change searchText and wait current fetch
    if(store.getState().search.isFetching){
        dispatch(changeSearchTextAction(searchText));
        return;
    }

    dispatch(startFetchAction(searchText));

    //if length < 3 clear results
    if(searchText.length < 3){
        dispatch(successFetchAction(searchText,[]));
        return;
    }
    await fetch(
        Config.API_URL+searchText
    ).then((resp) => {
        if(resp.ok)
            return resp.json();
        else dispatch(fetchErrorAction());
    }).then(
        (resData) => {
            let searchResult : CocktailData[];
            if(resData === undefined)
                return
            if(resData.drinks == null){
                searchResult = [];
            }else{
                searchResult = resData.drinks.map((cocktail) =>{
                    return {thumbURL: cocktail.strDrinkThumb,name: cocktail.strDrink,id: cocktail.idDrink}
                });
            }
            //update redux data
            dispatch(successFetchAction(searchText,searchResult));
        }
    ).catch(err => {
        dispatch(fetchErrorAction());
    });
}