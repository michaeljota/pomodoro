import { compose } from '@ngrx/core/compose';
import { ActionReducer, combineReducers } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';
import {  } from './models';

import {
} from './reducers';

// tslint:disable-next-line
export interface IAppState {
}

export const APP_STATE: IAppState = {
};

const appReducers = {
};

const DEV_REDUCER = compose(storeLogger(), combineReducers)(appReducers);
const PROD_REDUCER = combineReducers(appReducers);

export const APP_REDUCER: ActionReducer<IAppState> =
  ENV === 'production'
  ? PROD_REDUCER
  : DEV_REDUCER;
