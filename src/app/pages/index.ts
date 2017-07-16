import { Routes } from '@angular/router';

import { MainPage } from './main';
import { NoContentPage } from './no-content';

export const PAGES: ReadonlyArray<any> = [
  MainPage,
  NoContentPage,
];

export const PAGES_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main',
  },
  {
    component: MainPage,
    path: 'main',
  },
  {
    component: NoContentPage,
    path: '**',
  },
];
