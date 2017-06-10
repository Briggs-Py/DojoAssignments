import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.routing'
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { CurrenciesComponent } from './currencies/currencies.component';
import { DatesComponent } from './dates/dates.component';
import { TimeComponent } from './time/time.component';
import { DatetimeComponent } from './datetime/datetime.component';
import { RoutingComponent } from './routing/routing.component';
import { GoodTimeComponent } from './time/good-time/good-time.component';
import { BadTimeComponent } from './time/bad-time/bad-time.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    CurrenciesComponent,
    DatesComponent,
    TimeComponent,
    DatetimeComponent,
    RoutingComponent,
    GoodTimeComponent,
    BadTimeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
