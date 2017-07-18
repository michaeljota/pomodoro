import { compose } from '@ngrx/core/compose';
import { ActionReducer, combineReducers } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';

import { Cicle } from './models';

import {
  CICLE_REDUCER,
  CicleState,
  TIMER_REDUCER,
  TimerState,
} from './reducers';

// tslint:disable-next-line
export interface IAppState {
  readonly cicle: CicleState;
  readonly timer: TimerState;
}

export const APP_STATE: IAppState = {
  cicle: Cicle.STOP,
  timer: 0,
};

const appReducers = {
  cicle: CICLE_REDUCER,
  timer: TIMER_REDUCER,
};

const DEV_REDUCER = compose(storeLogger(), combineReducers)(appReducers);
const PROD_REDUCER = combineReducers(appReducers);

export const APP_REDUCER: ActionReducer<IAppState> =
  ENV === 'production'
  ? PROD_REDUCER
  : DEV_REDUCER;
