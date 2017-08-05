import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from './material.module';

/*
 * Platform and Environment providers/directives/pipes
 */
import { APP_REDUCER, APP_STATE } from './app.reducer';
import { ROUTES } from './app.routes';
import { ENV_PROVIDERS } from './environment';

// App is our top level component
import { AppComponent } from './app.component';

import { COMPONENTS } from './components';
import { DIRECTIVES } from './directives';
import { PAGES } from './pages';
import { PIPES } from './pipes';
import { SERVICES } from './services';
import { WIDGETS } from './widgets';

import './../styles/icons.scss';
import './../styles/styles.scss';
import './../styles/theme.scss';

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PAGES,
    ...PIPES,
    ...WIDGETS,
  ],
  /**
   * Import Angular's modules.
   */
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot(
      ROUTES,
      { useHash: true, preloadingStrategy: PreloadAllModules },
    ),
    StoreModule.provideStore(APP_REDUCER, APP_STATE),
  ],
  /**
   * Expose our Services and Providers into Angular's dependency injection.
   */
  providers: [
    ENV_PROVIDERS,
    ...SERVICES,
  ],
})
export class AppModule {

}
