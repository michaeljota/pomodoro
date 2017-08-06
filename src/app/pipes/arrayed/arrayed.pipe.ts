import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'arrayed'})
export class ArrayedPipe implements PipeTransform {
  public transform(value: number): ReadonlyArray<void> {
    return Array(value).fill(void 0);
  }
}
