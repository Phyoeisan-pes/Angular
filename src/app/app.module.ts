import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConfirmComponent } from './confirm/confirm.component';

import { LoginComponent } from './login/login.component';

import { RegisterlistComponent } from './registerlist/registerlist.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent, 
    ConfirmComponent,
    LoginComponent,
    RegisterlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {DashboardComponent; RegisterlistComponent; ConfirmComponent }
