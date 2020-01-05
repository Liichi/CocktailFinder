import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux';
import {RootState} from '../store/store'
import store from '../store/store';
import {CocktailData} from '../components/cocktail/cocktailData';

export interface StartFetch {
  type: 'START_FETCH',
  searchText: string
};

export interface SuccessFetch {
  type: 'SUCCESS_FETCH',
  cocktails: CocktailData[],
  searchText: string
};

export interface ErrorFetch {
  type: 'ERROR_FETCH',
  searchText: string
};

export interface CancelFetch {
  type: 'CANCEL_FETCH',
  isFetching: boolean
};

export type ActionTypes = StartFetch | CancelFetch | ErrorFetch | SuccessFetch;

export function successFetchAction(searchText: string,newCocktails: CocktailData[]): ActionTypes {
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

export const startFetch = (
  searchText: string//, controller: AbortController
): ThunkAction<void, RootState, null, Action > => async dispatch => {
  dispatch(startFetchAction(searchText));
  const response = await fetch(
    'https://thecocktaildb.com/api/json/v1/1/search.php?s='+searchText, {}
  )
  /*.then(
    (response) => {response.json();}
  ).catch(function(err) {
    console.log('ERROR :(');
  });*/
  let resData = await response.json();
  if(store.getState().search.searchText === searchText){
    let searchResult : CocktailData[];
    if(resData != undefined && resData.drinks != undefined){
      searchResult = resData.drinks.map((cocktail) =>{
        return {thumbURL: cocktail.strDrinkThumb,name: cocktail.strDrink,id: cocktail.idDrink}
      });
    }
    for (let cocktail of searchResult) {
      console.log(cocktail.thumbURL);
    }
    dispatch(successFetchAction(searchText,searchResult));
  }
}