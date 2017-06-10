import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WallComponent } from './wall/wall.component';
import { LoginComponent } from './login/login.component';


export const router: Routes = [
    { path: '', component: LoginComponent},
    { path: 'wall', component: WallComponent }

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
