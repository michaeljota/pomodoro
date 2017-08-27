import { TimerDispacher } from 'app/actions';

import { TIMER_REDUCER, TimerState } from './timer.reducer';

describe('Timer Reducer', () => {
  it('should set the timer to 10', () => {
    const originalState: TimerState = 0;
    const expectedState: TimerState = 10;
    const resultedState: TimerState = TIMER_REDUCER(
      originalState,
      new TimerDispacher().set(10),
    );

    expect(resultedState).toEqual(expectedState);
  });

  it('should add the timer 5', () => {
    const originalState: TimerState = 5;
    const expectedState: TimerState = 10;
    const resultedState: TimerState = TIMER_REDUCER(
      originalState,
      new TimerDispacher().add(5),
    );

    expect(resultedState).toEqual(expectedState);
  });

  it('should subtrac the timer 5', () => {
    const originalState: TimerState = 5;
    const expectedState: TimerState = 0;
    const resultedState: TimerState = TIMER_REDUCER(
      originalState,
      new TimerDispacher().subtract(5),
    );

    expect(resultedState).toEqual(expectedState);
  });

  it('should not change the state with another type action', () => {
    const originalState: TimerState = 500;
    const expectedState: TimerState = 500;
    const resultedState: TimerState = TIMER_REDUCER(
      originalState,
      {
        type: '[TEST] OTHER ACTION',
      },
    );

    expect(resultedState).toEqual(expectedState);
  });

  it('should init state to 0', () => {
    const originalState: TimerState = undefined as any;
    const expectedState: TimerState = 0;
    const resultedState: TimerState = TIMER_REDUCER(
      originalState,
      {
        type: '[TEST] INIT STATE',
      },
    );

    expect(resultedState).toEqual(expectedState);
  });
});
