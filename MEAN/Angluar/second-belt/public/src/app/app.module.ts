import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.routes';
import { MainService } from './main/main.service';
import { LoginService } from './login/login.service';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { MainEndComponent } from './main/main-end/main-end.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    MainEndComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [MainService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
