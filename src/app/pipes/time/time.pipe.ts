import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time',
})
export class TimePipe implements PipeTransform {
  public transform(seconds: number): string {
    const currentMinutes = zeroPadder(Math.floor(seconds / 60));
    const currentSeconds = zeroPadder(Math.floor(seconds % 60));

    return `${currentMinutes}:${currentSeconds}`;
  }
}

function zeroPadder(n: number): string {
  return n < 10 ? `0${n}` : `${n}`;
}
