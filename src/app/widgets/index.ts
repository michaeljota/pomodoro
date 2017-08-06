import { CounterMultiWidget } from './counter-multi/counter-multi.widget';
import { CounterSingleWidget } from './counter-single/counter-single.widget';
import { CounterWidget } from './counter/counter.widget';
import { StartButtonWidget } from './start-button/start-button.widget';
import { TimerProgressWidget } from './timer-progress/timer-progress.widget';
import { TitleWidget } from './title/title.widget';

export const WIDGETS: ReadonlyArray<any> = [
  CounterMultiWidget,
  CounterSingleWidget,
  CounterWidget,
  StartButtonWidget,
  TimerProgressWidget,
  TitleWidget,
];
