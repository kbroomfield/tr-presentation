import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MockService} from './core/mocks/mock.service';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {AuthInterceptor} from './core/interceptors/auth.interceptor';
import {CoreModule} from './core/core.module';
import {LandingModule} from './modules/landing/landing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(MockService),
    CoreModule,
    LandingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
