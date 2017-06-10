import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
    topics: Array<any>;
    user: any;
    error: any;

  constructor(private _mainService: MainService,
  private _router: Router) { }

  ngOnInit() {
      this.getCurrentUser()
      this.getAllTopics()
  }

  getCurrentUser(){
      this._mainService.getCurrent()
      .then((user) => this.user = user)
      .catch((err) => this._router.navigate(['']))
  }

  getAllTopics(){
      this._mainService.getTopics()
      .then((topics) => this.topics = topics)
      .catch((err) => console.log(err))
  }

  createTopic(formData){
      this._mainService.createTopic(formData.value)
      .then(()=> {
          formData.reset()
          this.getAllTopics()
      })
      .catch((err)=> {
          console.log(err)
          this.error = err;
      })
  }
}
