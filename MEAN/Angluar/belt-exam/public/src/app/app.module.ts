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
import { MainNewComponent } from './main/main-new/main-new.component';
import { MainShowComponent } from './main/main-show/main-show.component';
import { MainAnswerComponent } from './main/main-answer/main-answer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    MainNewComponent,
    MainShowComponent,
    MainAnswerComponent
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
