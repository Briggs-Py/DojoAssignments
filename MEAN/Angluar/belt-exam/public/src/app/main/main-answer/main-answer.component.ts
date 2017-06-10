import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MainService } from './../main.service';

@Component({
  selector: 'app-main-answer',
  templateUrl: './main-answer.component.html',
  styleUrls: ['./main-answer.component.css']
})
export class MainAnswerComponent implements OnInit {
    user: any;
    question: any;
    question_id: String;
    error: any;

    constructor(private _router: ActivatedRoute,
        private _route: Router,
        private _mainService: MainService) { }

    ngOnInit() {
    	this._router.params.subscribe((param)=>{
        this.question_id = param.id;
      })
      this.getQuestion(this.question_id);
      this.getCurrentUser();
    }

    getCurrentUser(){
        this._mainService.getCurrent()
        .then((user) => this.user = user)
        .catch((err) => this._route.navigate(['']))
    }

    getQuestion(id){
    	this._mainService.getQuestion(id)
    		.then( (question) => {
              this.question = question;
              console.log(question)
          })
    		.catch( (err) => console.log(err))
    }

    createAnswer(formData, question_id){
        this._mainService.createAnswer(formData.value, question_id)
    		.then(() => this._route.navigate(['main']))
    		.catch( (err) => {
                console.log(err);
                this.error = err;
            })
    }

    home(){
        this._route.navigate(['main'])
    }

    show(id){
        this._route.navigate(['show/' + id])
    }
}
