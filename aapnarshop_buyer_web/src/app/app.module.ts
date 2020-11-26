import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

/* Interceptors */
import { HttpInterceptorProviders } from './interceptors';

/* Core Modules */ 
import { ConfigService } from './services/core/config/config.service';

/* Shared Modules */
import { MaterialModule } from './modules/shared/material.module';
import { RoutingModule, RouitngPathComponents } from './modules/shared/routing.module';

/* Feature Modules */

/* Services */ 

/* Master Layout Components */
import { AppComponent } from './app.component';
import { DialogComponent } from './layout/common/dialog/dialog.component';

const initializerConfigFn = (appConfig: ConfigService) => {
  return () => appConfig.loadAppConfig();
};

@NgModule({
  declarations: [
    AppComponent,
    RouitngPathComponents,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule, ReactiveFormsModule,
    MaterialModule,
    RoutingModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializerConfigFn,
      multi: true,
      deps: [ConfigService]
    },
    HttpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
