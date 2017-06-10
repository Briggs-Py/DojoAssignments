import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MainService } from './../main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-new',
  templateUrl: './main-new.component.html',
  styleUrls: ['./main-new.component.css']
})
export class MainNewComponent implements OnInit {
    @Output() eventNew = new EventEmitter();
    user: any;
    error: any;

  constructor(private _mainService: MainService,
  private _router: Router) { }

  ngOnInit() {
      this.getCurrentUser()
  }

  getCurrentUser(){
      this._mainService.getCurrent()
      .then((user) => this.user = user)
      .catch((err) => this._router.navigate(['']))
  }

  createTopic(formData){
      this.eventNew.emit(formData)
  }

}
