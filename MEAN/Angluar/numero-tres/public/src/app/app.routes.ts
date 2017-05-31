import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { MainNewComponent } from './main/main-new/main-new.component';
import { MainShowComponent } from './main/main-show/main-show.component';


export const routing: Routes = [
    { path: '', component: LoginComponent},
    { path: 'main', component: MainComponent},
    { path: 'new', component: MainNewComponent},
    { path: 'show/:id', component: MainShowComponent},

];

export const routes: ModuleWithProviders = RouterModule.forRoot(routing);
