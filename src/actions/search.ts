import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux';

export interface StartFetch {
  type: 'START_FETCH'
  accessToken: string
}

export interface CancelFetch {
  type: 'CANCEL_FETCH'
  isFetching: boolean
}

export type Action = StartFetch | CancelFetch

/*export const isFetching = (isFetching: boolean): CancelFetch => {
  return { type: 'CANCEL_FETCH', isFetching }
}*/