import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoginService } from './login/login.service';
import { MainService} from './main/main.service';
import { ProfileService } from './profile/profile.service';
import { routes } from "./app.routes";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { MainNewComponent } from './main/main-new/main-new.component';
import { MainShowComponent } from './main/main-show/main-show.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    MainNewComponent,
    MainShowComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [LoginService, MainService, ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
