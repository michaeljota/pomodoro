import { Action } from '@ngrx/store';

import { Cicle } from 'app/models';

export enum CicleActions {
  SET = '[CICLE] SET',
}

export class CicleDispacher {
  public start(): SetCicleAction {
    return this.set(Cicle.STARTED);
  }

  public stop(): SetCicleAction {
    return this.set(Cicle.STOP);
  }

  public pause(): SetCicleAction {
    return this.set(Cicle.PAUSE);
  }

  public shortBreak(): SetCicleAction {
    return this.set(Cicle.SHORT_BREAK);
  }

  public longBreak(): SetCicleAction {
    return this.set(Cicle.LONG_BREAK);
  }

  private set(cicle: Cicle): SetCicleAction {
    return {
      payload: cicle,
      type: CicleActions.SET,
    };
  }

}

interface SetCicleAction extends Action {
  readonly payload: Cicle;
  readonly type: CicleActions.SET;
}

export type CicleAction = SetCicleAction;
