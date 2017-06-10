import { Component, OnInit } from '@angular/core';
import {UserService} from './user.service';
import {User} from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: Array<User> = [];


  constructor(private _userService: UserService) { }

  ngOnInit() {
      this.getUsers();
  }

  create(user: User){
      this._userService.create(user)
      .then(status => this.getUsers())
      .catch(err => console.log(err));

      this.users.push(user);
  }

  destroy(user: User){
      this._userService.destroy(user)
      .then(status => this.getUsers())
      .catch(err => console.log(err));
  }

  update(user: User){
      console.log("user component update ", user);
      this._userService.update(user)
      .then(users => this.getUsers())
      .catch(err => console.log(err))
  }

  getUsers(){
      this._userService.getUsers()
      .then(users => this.users = users)
      .catch(err => console.log(err))
  }
}
