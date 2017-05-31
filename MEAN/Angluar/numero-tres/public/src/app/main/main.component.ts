import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
    questions: Array<any>;
    user: any;

  constructor(private _mainService: MainService,
  private _router: Router) { }

  ngOnInit() {
      this.getCurrentUser()
      this.getAllQuestions()
  }

  getCurrentUser(){
      this._mainService.getCurrent()
      .then((user) => this.user = user)
      .catch((err) => this._router.navigate(['']))
  }

  getAllQuestions(){
      this._mainService.getQuestions()
      .then((questions) => this.questions = questions)
      .catch((err) => console.log(err))
  }

  delete(id){
      this._mainService.delete(id)
      .then(status => this.getAllQuestions())
      .catch(err => console.log(err));
  }

}
