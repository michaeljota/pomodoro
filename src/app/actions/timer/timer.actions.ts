import { Action } from '@ngrx/store';

export enum TimerActions {
  ADD = '[TIMER] ADD',
  SET = '[TIMER] SET',
  SUBTRACT = '[TIMER] SUBTRACT',
}

export class TimerDispacher {
  public set(seconds: number): TimerAction {
    return {
      payload: seconds,
      type: TimerActions.SET,
    };
  }

  public add(seconds: number): TimerAction {
    return {
      payload: seconds,
      type: TimerActions.ADD,
    };
  }

  public subtract(seconds: number): TimerAction {
    return {
      payload: seconds,
      type: TimerActions.SUBTRACT,
    };
  }
}

export interface TimerAction extends Action {
  readonly payload: number;
  readonly type: TimerActions;
}
