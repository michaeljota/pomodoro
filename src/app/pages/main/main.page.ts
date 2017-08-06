import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

import { Cicle } from 'app/models';

@Component({
  styleUrls: ['./main.page.css'],
  templateUrl: './main.page.html',
})
export class MainPage implements OnInit {
  public state: Cicle;
  public seconds: number;
  public fillerIncrement: number;
  public fillerHeight: number;
  public pomodoros: number;
  public intervalSubscription: Subscription;

  public ngOnInit(): void {
    this.resetApp();
  }

  public resetApp(): void {
    this.pomodoros = 0;
    this.stopTimer();
  }

  public resetVariables(secs: number, state: Cicle): void {
    this.seconds = secs;
    this.state = state;
    this.fillerIncrement = 100 / (this.seconds + 1);
  }

  public start(state: Cicle): void {
    if (state === Cicle.STARTED) {
      this.state = Cicle.PAUSE;

      return;
    }

    if (state === Cicle.PAUSE) {
      this.state = Cicle.STARTED;

      return;
    }
    if (!this.intervalSubscription
      || this.intervalSubscription.closed
    ) {
      this.intervalSubscription = Observable
        .interval(1000)
        .subscribe(this.intervalCallback);
    }

    this.startWork();
  }

  public stop(): void {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }

    this.stopTimer();
  }

  public startWork(): void {
    this.resetVariables(25 * 60, Cicle.STARTED);
  }

  public startShortBreak(): void {
    this.resetVariables(5 * 60, Cicle.SHORT_BREAK);
  }

  public startLongBreak(): void {
    this.resetVariables(15 * 60, Cicle.LONG_BREAK);
  }

  public stopTimer(): void {
    this.resetVariables(25 * 60, Cicle.STOP);
  }

  public timerComplete(): void {
    switch (this.state) {
      case Cicle.STARTED:
        this.pomodoros++;
        if (this.pomodoros % 4 !== 0) {
          this.startShortBreak();
          break;
        }
        this.startLongBreak();
        break;
      case Cicle.LONG_BREAK:
      case Cicle.SHORT_BREAK:
        this.startWork();

        break;
      default:
        this.state = Cicle.STOP;
        break;
    }
  }

  public intervalCallback = (): void => {
    if (this.state === Cicle.PAUSE || this.state === Cicle.STOP) {
      return;
    }
    if (this.seconds === 0) {
      this.timerComplete();

      return;
    }
    this.seconds--;
  }
}
