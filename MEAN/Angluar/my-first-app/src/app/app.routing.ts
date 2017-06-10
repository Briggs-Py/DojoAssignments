import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CurrenciesComponent } from './currencies/currencies.component';
import { TimeComponent } from './time/time.component';
import { GoodTimeComponent } from './time/good-time/good-time.component';
import { BadTimeComponent } from './time/bad-time/bad-time.component';


export const router: Routes = [
    { path: '', redirectTo: 'currencies', pathMatch: 'full' },
    { path: 'currencies', component: CurrenciesComponent },
    { path: 'time', component: TimeComponent, children: [
        { path: 'good-time', component: GoodTimeComponent },
        { path: 'bad-time', component: BadTimeComponent }
    ] }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
