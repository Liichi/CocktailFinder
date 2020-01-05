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
  cocktails: CocktailData[]
};

export interface ErrorFetch {
  type: 'ERROR_FETCH'
};

export interface CancelFetch {
  type: 'CANCEL_FETCH'
};

export type ActionTypes = StartFetch | CancelFetch | ErrorFetch | SuccessFetch;

export function successFetchAction(newCocktails: CocktailData[]): ActionTypes {
  return {
    type: 'SUCCESS_FETCH',
    cocktails: newCocktails
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

export const startFetch = (
  searchText: string//, controller: AbortController
): ThunkAction<void, RootState, null, Action > => async dispatch => {
  dispatch(startFetchAction(searchText));
  if(searchText.length < 4){
    dispatch(successFetchAction([]));
    return;
  }
  //let success : boolean = false;
  const response = await fetch(
    'https://thecocktaildb.com/api/json/v1/1/search.php?s='+searchText, {}
  )/*.then(
    (response) => {success=true;}
  ).catch(function(err) {
    success=false;
  });
  if(!success)
    return;*/
  let resData = await response.json();
  if(store.getState().search.searchText === searchText){
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
    dispatch(successFetchAction(searchResult));
  }
}