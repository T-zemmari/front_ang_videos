import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";




import { LoginComponent } from '../componentes/login/login.component';
import { RegisterComponent } from "../componentes/register/register.component";
import { ErrorComponent } from "../componentes/error/error.component";
import { HomeComponent } from "../componentes/home/home.component";


const appRoutes : Routes = [

    {path :'' , component: HomeComponent},
    {path :'inicio' , component: HomeComponent},
    {path :'login' , component: LoginComponent},
    {path :'register' , component: RegisterComponent}, 
    {path :'error' , component: ErrorComponent},
    {path :'**' , component: ErrorComponent},
]

export const appRoutingProviders : any[]= [];
export const routing: ModuleWithProviders<any>= RouterModule.forRoot(appRoutes);