import { NgModule } from '@angular/core';
import {
  MdButtonModule,
  MdCardModule,
  MdProgressSpinnerModule,
} from '@angular/material';

@NgModule({
  exports: [
    MdButtonModule,
    MdCardModule,
    MdProgressSpinnerModule,
  ],
  imports: [
    MdButtonModule,
    MdCardModule,
    MdProgressSpinnerModule,
  ],
})
export class MaterialModule {
}
