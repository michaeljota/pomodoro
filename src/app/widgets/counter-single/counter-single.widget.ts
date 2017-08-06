import { Component, Input } from '@angular/core';

@Component({
  selector: 'pom-counter-single',
  styles: [`
    div {
      height: 100%;
    }
    md-progress-spinner {
      height: 20px;
      width: 20px;
    }
    span {
      position: absolute;
      font-size: xx-small;
    }
  `],
  template: `
    <div
      fxLayout="column"
      fxLayoutAlign="start center"
    >
      <span class="mat-caption"
      >
        {{ pomodoris }}
      </span>
      <md-progress-spinner
        strokeWidth="10"
        value="100"
      >
      </md-progress-spinner>
    </div>
  `,
})
export class CounterSingleWidget {
  @Input()
  public readonly pomodoros: number;

  public get pomodoris(): number {
    return Math.ceil(this.pomodoros / 4);
  }

  public get filled(): number {
    const percent = Math.floor(this.pomodoros % 4) * 25;

    return percent || 100;
  }
}
