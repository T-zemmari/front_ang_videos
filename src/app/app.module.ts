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
import { EditarUsuarioComponent } from '../componentes/editar-usuario/editar-usuario.component';
import { GuardarVideosComponent } from '../componentes/guardar-videos/guardar-videos.component';


import {UserService} from '../app/Services/user.service.';
import {IdentityGuard} from '../app/Services/identity.guard';



@NgModule({
  declarations: [
    AppComponent,
    AppComponent,
    HomeComponent,
    RegisterComponent,
    ErrorComponent,
    LoginComponent,
    EditarUsuarioComponent,
    GuardarVideosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders,
    IdentityGuard,
    UserService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
