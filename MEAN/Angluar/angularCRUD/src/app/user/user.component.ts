import { Component, OnInit } from '@angular/core';
import {UserService} from './user.service';
import {User} from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: Array<User> = [
      new User(1, "First", "Last", "email@email.com"),
      new User(2, "First", "Last", "email@email.com"),
      new User(3, "First", "Last", "email@email.com")
  ];


  constructor(private _userService: UserService) { }

  ngOnInit() {
      this.getUsers();
  }

  create(user: User){
      this._userService.create(user)
      .then(status => this.getUsers())
      .catch(err => console.log(err));
  }

  destroy(user: User){
      const i = this.users.indexOf(user);
      this.users.splice(i,1);
  }

  update(users: any){
      const i = this.users.indexOf(users.original)
      this.users[i] = users.edited;
  }

  getUsers(){
      this._userService.getUsers()
      .then(users => this.users = users)
  }
}
