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

  createAnswer(formData, question_id){
      this._mainService.createAnswer(formData.value, question_id)
      .then(() =>{
          this.getAllQuestions();
      })
      .catch( err => console.log(err))
  }

  newQuestion(){
      this._router.navigate(['new'])
  }
  showQuestion(id){
      this._mainService.getQuestions()
      .then((question) => {
          this.questions = question;
          this._router.navigate(['show'])
      })
      .catch((err) => console.log(err))
  }
  answerQuestion(){
      this._router.navigate(['answer'])
  }


}
