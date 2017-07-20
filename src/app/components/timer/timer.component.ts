import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

import { TimerDispacher } from 'app/actions/timer/timer.actions';
import { IAppState } from 'app/app.reducer';

@Component({
  selector: 'pom-timer',
  template: `
    {{ timer$ | async | time }}
    `,
})
export class TimerComponent implements OnInit {
  public timer$: Observable<number>;

  constructor(private readonly _store: Store<IAppState>) { }

  public ngOnInit(): void {
    this.timer$ = this._store.select<number>('timer');
    this._store.dispatch(new TimerDispacher().set(25 * 60));
  }

}
