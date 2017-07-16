import { ActionReducer } from '@ngrx/store';

import { Cicle } from 'app/models';

import { CicleAction, CicleActions } from 'app/actions';

export type CicleState = Cicle;

export const CICLE_REDUCER: ActionReducer<CicleState> =
  (state: CicleState, action: CicleAction): CicleState => {
    switch (action.type) {
      case CicleActions.SET: {
        return action.payload;
      }
      default: {
        return state;
      }
    }
  };
