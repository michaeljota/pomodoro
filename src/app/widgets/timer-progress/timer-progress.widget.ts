import { Component, Input } from '@angular/core';

import { Cicle } from 'app/models';

@Component({
  selector: 'pom-timer-progress',
  styles: [`
    h2 {
      position: absolute;
    }

    md-progress-spinner {
      height: 150px;
      width: 150px;
    }
  `],
  template: `
    <div fxLayout="column" fxLayoutAlign="center center">
      <h2 class="mat-title">{{ seconds | time }}</h2>
      <md-progress-spinner
        [value]="fillerHeight"
        [color]="color"
      >
      </md-progress-spinner>
    </div>
  `,
})
export class TimerProgressWidget {
  @Input()
  public readonly seconds: number;
  @Input()
  public readonly cicle: Cicle;
  @Input()
  public readonly fillerIncrement: number;

  public get fillerHeight(): number {
    if (this.cicle === Cicle.STOP) {
      return 100;
    }
    const fill = Math.floor(this.fillerIncrement * this.seconds);

    return 100 - fill;
  }

  public get color(): 'primary' | 'accent' {
    switch (this.cicle) {
      case Cicle.STARTED:
      case Cicle.PAUSE:
      case Cicle.STOP: {
        return 'primary';
      }
      case Cicle.LONG_BREAK:
      case Cicle.SHORT_BREAK:
      default: {
        return 'accent';
      }
    }
  }
}
