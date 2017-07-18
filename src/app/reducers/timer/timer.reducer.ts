import { ActionReducer } from '@ngrx/store';

import { TimerAction, TimerActions } from 'app/actions';

export type TimerState = number;

export const TIMER_REDUCER: ActionReducer<TimerState> = (
  state: TimerState = 0,
  { type, payload }: TimerAction,
): TimerState => {
    switch (type) {
      case TimerActions.SET: {
        return payload;
      }
      case TimerActions.ADD: {
        return state + payload;
      }
      case TimerActions.SUBTRACT: {
        return state - payload;
      }
      default: {
        return state;
      }
    }
  };
