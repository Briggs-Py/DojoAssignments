import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';
import { WallService } from './wall/wall.service';
import { LoginService } from './login/login.service';
import { AppComponent } from './app.component';
import { WallComponent } from './wall/wall.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    WallComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [WallService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
