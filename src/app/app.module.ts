import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing ,appRoutingProviders} from './app.routing';

import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from '../componentes/home/home.component';
import { RegisterComponent } from '../componentes/register/register.component';
import { ErrorComponent } from '../componentes/error/error.component';
import { LoginComponent } from '../componentes/login/login.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    AppComponent,
    HomeComponent,
    RegisterComponent,
    ErrorComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
