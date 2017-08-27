import { Component, Input } from '@angular/core';

// TODO: Make this a component when the app gets a proper store

@Component({
  selector: 'pom-counter',
  styles: [`
    div {
      height: 20px;
    }
    md-progress-spinner {
      height: 20px;
      width: 20px;
    }
    span {
      position: absolute;
    }
  `],
  template: `
    <div
      fxLayout="row"
      fxLayoutAlign="start center"
      fxLayoutGap="5px"
    >
      <pom-counter-multi
        [pomodoros]="pomodoros"
        *ngIf="isMulti; else single"
      >
      </pom-counter-multi>
      <md-progress-spinner
        strokeWidth="10"
        [value]="lastFilled"
      >
      </md-progress-spinner>
    </div>
    <ng-template
      #single
    >
      <pom-counter-single
        [pomodoros]="pomodoros"
      >
      </pom-counter-single>
    </ng-template>
  `,
})
export class CounterWidget {
  @Input()
  public readonly pomodoros: number;

  public get isMulti(): boolean {
    return Math.floor(this.pomodoros / 4) < 10;
  }

  public get lastFilled(): number {
    return Math.floor(this.pomodoros % 4) * 25;
  }
}
