import { Component, OnInit } from '@angular/core';
import { MainService } from './../main.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-show',
  templateUrl: './main-show.component.html',
  styleUrls: ['./main-show.component.css']
})
export class MainShowComponent implements OnInit {
  user: any;
  question: any;
  question_id: String;

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
      .then((user) => {
          this.user = user
      })
      .catch((err) => this._route.navigate(['']))
  }

  getQuestion(id){
  	this._mainService.getQuestion(id)
  		.then( (question) => {
            this.question = question;
        })
  		.catch( (err) => console.log(err))
  }

  vote(id, number){
      this._mainService.vote(id, number)
      .then((res:Response) => this.getQuestion(this.question_id))
      .catch((err) => console.log(err))
  }

}
