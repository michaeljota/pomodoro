import { CicleDispacher } from 'app/actions';
import { Cicle } from 'app/models';

import { CICLE_REDUCER, CicleState } from './cicle.reducer';

describe('Cicle Reducer', () => {
  it('should set the cicle to `POMODORO`', () => {
    const originalState: CicleState = Cicle.STOP;
    const expectedState: CicleState = Cicle.POMODORO;
    const resultedState: CicleState = CICLE_REDUCER(
      originalState,
      new CicleDispacher().start(),
    );

    expect(resultedState).toEqual(expectedState);
  });

  it('should set the cicle to `STOP`', () => {
    const originalState: CicleState = Cicle.POMODORO;
    const expectedState: CicleState = Cicle.STOP;
    const resultedState: CicleState = CICLE_REDUCER(
      originalState,
      new CicleDispacher().stop(),
    );

    expect(resultedState).toEqual(expectedState);
  });

  it('should set the cicle to `PAUSE`', () => {
    const originalState: CicleState = Cicle.POMODORO;
    const expectedState: CicleState = Cicle.PAUSE;
    const resultedState: CicleState = CICLE_REDUCER(
      originalState,
      new CicleDispacher().pause(),
    );

    expect(resultedState).toEqual(expectedState);
  });

  it('should set the cicle to `SHORT_BREAK`', () => {
    const originalState: CicleState = Cicle.POMODORO;
    const expectedState: CicleState = Cicle.SHORT_BREAK;
    const resultedState: CicleState = CICLE_REDUCER(
      originalState,
      new CicleDispacher().shortBreak(),
    );

    expect(resultedState).toEqual(expectedState);
  });

  it('should set the cicle to `LONG_BREAK`', () => {
    const originalState: CicleState = Cicle.POMODORO;
    const expectedState: CicleState = Cicle.LONG_BREAK;
    const resultedState: CicleState = CICLE_REDUCER(
      originalState,
      new CicleDispacher().longBreak(),
    );

    expect(resultedState).toEqual(expectedState);
  });

  it('should not change the state with another type action', () => {
    const originalState: CicleState = Cicle.POMODORO;
    const expectedState: CicleState = Cicle.POMODORO;
    const resultedState: CicleState = CICLE_REDUCER(
      originalState,
      {
        type: '[TEST]',
      },
    );

    expect(resultedState).toEqual(expectedState);
  });
});
