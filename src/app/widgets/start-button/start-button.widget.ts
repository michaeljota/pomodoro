import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cicle } from 'app/models';

@Component({
  selector: 'pom-start-button',
  template: `
    <button
      md-button
      color="primary"
      (click)="emit()"
    >
      {{ label }}
    </button>
    `,
})
export class StartButtonWidget {
  @Input()
  public readonly cicle: Cicle;
  @Output()
  public onClick: EventEmitter<Cicle> = new EventEmitter<Cicle>();

  public get label(): string {
    if (this.cicle === Cicle.STARTED) {
      return 'PAUSE';
    }

    return 'START';
  }

  /**
   * emitCicle
   */
  public emit(): void {
    this.onClick.emit(this.cicle);
  }
}
