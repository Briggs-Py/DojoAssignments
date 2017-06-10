import { Component, OnInit } from '@angular/core';
import {LoginService} from './login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _loginService: LoginService) { }

  ngOnInit() {
  }

  login(formData){
      this._loginService.login(formData.value)
      .then( (user) => console.log(user) )
      .catch( (err) => console.log(err) )
  }

}
