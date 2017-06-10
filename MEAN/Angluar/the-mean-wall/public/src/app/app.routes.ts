import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { LoginComponent } from './login/login.component';


export const routing: Routes = [
    { path: '', component: LoginComponent},
    { path: 'wall', component: MessageComponent }

];

export const routes: ModuleWithProviders = RouterModule.forRoot(routing);
