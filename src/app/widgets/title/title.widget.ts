import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Cicle } from 'app/models';

@Component({
  selector: 'pom-title',
  template: `
    {{ title | titlecase }}
  `,
})
export class TitleWidget {
  @Input()
  public set cicle(value: Cicle) {
    this._cicle = value;
    this._title.setTitle(this.title);
  }

  public get title(): string {
    return `Podomoro - ${this._cicle.toLocaleLowerCase()}`;
  }

  private _cicle: Cicle;

  constructor(
    private readonly _title: Title,
  ) { }
}
