import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { MainEndComponent } from './main/main-end/main-end.component';



export const routing: Routes = [
    { path: '', component: LoginComponent},
    { path: 'main', component: MainComponent},
    { path: 'end', component: MainEndComponent},
];

export const routes: ModuleWithProviders = RouterModule.forRoot(routing);
