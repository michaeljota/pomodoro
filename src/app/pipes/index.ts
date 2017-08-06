import { ArrayedPipe } from './arrayed/arrayed.pipe';
import { TimePipe } from './time/time.pipe';

export const PIPES: ReadonlyArray<any> = [
  ArrayedPipe,
  TimePipe,
];
