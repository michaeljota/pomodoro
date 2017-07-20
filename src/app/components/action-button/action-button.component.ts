import {
    ChangeDetectionStrategy,
    Component,
    OnDestroy,
    OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Rx';

import { IAppState } from 'app/app.reducer';

import { CicleDispacher, TimerDispacher } from 'app/actions';
import { Cicle } from 'app/models';
import { CicleState } from 'app/reducers';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'pom-action-button',
  template: `
    <button
      (click)="setCicle()"
      color="primary"
      md-raised-button
    >
      {{ text }}
    </button>
    `,
})
export class ActionButtonComponent implements OnInit, OnDestroy {

  public text: string;
  private _currentCicle: Cicle;
  private _cicleSubscription: Subscription;
  private _tickerId: number;

  constructor(
    private readonly _store: Store<IAppState>,
  ) { }

  public ngOnInit(): void {
    this._cicleSubscription = this._store.select<CicleState>('cicle')
      .subscribe((value: Cicle): void => {
        this._currentCicle = value;
      });
    this.resetText();
  }

  /**
   * setCicle
   */
  public setCicle(): void {
    switch (this._currentCicle) {
      case Cicle.STOP:
      case Cicle.LONG_BREAK:
      case Cicle.SHORT_BREAK: {
        this._store.dispatch(new TimerDispacher().set(25 * 60));
        this._store.dispatch(new CicleDispacher().start());
        this._tickerId = window.setInterval(this.tick, 1000);
        break;
      }
      case Cicle.PAUSE:
        this._store.dispatch(new CicleDispacher().start());
        break;
      case Cicle.POMODORO:
      default:
        this._store.dispatch(new CicleDispacher().pause());
    }
    this.resetText();
  }

  public ngOnDestroy(): void {
    this._cicleSubscription.unsubscribe();
  }

  private resetText(): void {
    switch (this._currentCicle) {
      case Cicle.STOP:
      case Cicle.LONG_BREAK:
      case Cicle.SHORT_BREAK:
      case Cicle.PAUSE: {
        this.text = 'START';
        break;
      }
      case Cicle.POMODORO:
      default:
        this.text = 'PAUSE';
    }
  }

  private tick = (): void => {
    if (this._currentCicle === Cicle.PAUSE) {
      return;
    }
    this._store.dispatch(new TimerDispacher().subtract(1));
  }

}
