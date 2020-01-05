import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction,Action } from 'redux';
import {RootState} from '../store/store'
import {Dispatch} from 'redux';
import { State } from '../reducers/search';

export interface StartFetch {
  type: 'START_FETCH',
  searchString: string
};

export interface SuccessFetch {
  type: 'SUCCESS_FETCH',
  searchString: string
};

export interface ErrorFetch {
  type: 'ERROR_FETCH',
  searchString: string
};

export interface CancelFetch {
  type: 'CANCEL_FETCH',
  isFetching: boolean
};

export type ActionTypes = StartFetch | CancelFetch | ErrorFetch | SuccessFetch;

/*export const isFetching = (isFetching: boolean): CancelFetch => {
  return { type: 'CANCEL_FETCH', isFetching }
}*/
/*
export const startFetch = (searchString: string): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  console.log('dispatching...1'+searchString);
  dispatch({type: 'START_FETCH',searchString: searchString})
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    return new Promise<void>((resolve) => {
      console.log('dispatching...2');
      dispatch({type: 'START_FETCH',searchString: searchString})
    })
  }
}*/

export function successFetchFN(searchString: string): ActionTypes {
  return {
    type: 'SUCCESS_FETCH',
    searchString
  }
}

export const startFetch = (
  message: string
): ThunkAction<void, RootState, null, Action > => async dispatch => {
  //const asyncResp = await exampleAPI()
  console.log('startFetching..');
  dispatch(successFetchFN(message));
}