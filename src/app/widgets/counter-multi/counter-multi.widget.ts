import { Component, Input } from '@angular/core';

@Component({
  selector: 'pom-counter-multi',
  styles: [`
    md-progress-spinner {
      height: 20px;
      width: 20px;
    }
  `],
  template: `
    <div
      fxLayout="row"
      fxLayoutAlign="start center"
      fxLayoutGap="5px"
    >
      <md-progress-spinner
        *ngFor="let void of (pomodoris | arrayed)"
        strokeWidth="10"
        value="100"
      >
      </md-progress-spinner>
    </div>
  `,
})
export class CounterMultiWidget {
  @Input()
  public readonly pomodoros: number;

  public get pomodoris(): number {
    return Math.floor(this.pomodoros / 4);
  }

  public get isSingle(): boolean {
    return this.pomodoris >= 10;
  }
}
