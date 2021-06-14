import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";




import { LoginComponent } from '../componentes/login/login.component';
import { RegisterComponent } from "../componentes/register/register.component";
import { ErrorComponent } from "../componentes/error/error.component";
import { HomeComponent } from "../componentes/home/home.component";
import { EditarUsuarioComponent } from "../componentes//editar-usuario/editar-usuario.component";
import { GuardarVideosComponent} from "../componentes/guardar-videos/guardar-videos.component";


import {IdentityGuard} from '../app/Services/identity.guard';

const appRoutes : Routes = [

    {path :'' , component: HomeComponent},
    {path :'inicio' , component: HomeComponent},
    {path :'login' , component: LoginComponent},
    {path :'logout/:sure' , component: LoginComponent}, 
    {path :'mis-videos' , component: EditarUsuarioComponent,canActivate:[IdentityGuard]}, 
    {path :'videos-favoritos' , component: GuardarVideosComponent,canActivate:[IdentityGuard]}, 
    {path :'editar-usuario' , component: EditarUsuarioComponent,canActivate:[IdentityGuard]}, 
    {path :'register' , component: RegisterComponent}, 
    {path :'error' , component: ErrorComponent},
    {path :'**' , component: ErrorComponent},
]

export const appRoutingProviders : any[]= [];
export const routing: ModuleWithProviders<any>= RouterModule.forRoot(appRoutes);