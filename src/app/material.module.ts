import { NgModule } from '@angular/core';
import {
  MdButtonModule,
  MdCardModule,
} from '@angular/material';

@NgModule({
  exports: [
    MdButtonModule,
    MdCardModule,
  ],
  imports: [
    MdButtonModule,
    MdCardModule,
  ],
})
export class MaterialModule {
}
