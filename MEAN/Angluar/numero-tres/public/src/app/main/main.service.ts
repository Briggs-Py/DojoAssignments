import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';

@Injectable()
export class MainService {

  constructor(private _http: Http) { }

  getCurrent(){
      return this._http.get('/api/current')
      .map((user:Response) => user.json())
      .toPromise()
  }

  getQuestions(){
      return this._http.get('/api/questions')
      .map((questions:Response) => questions.json())
      .toPromise()
  }

  getQuestion(id){
      return this._http.get('/api/questions/' + id)
      .map((question:Response) => question.json())
      .toPromise()
  }

  createQuestion(question){
      return this._http.post('/api/questions', question)
      .map((question:Response) => question.json())
      .toPromise()
  }

  createAnswer(answer, id){
      console.log(answer);
      return this._http.post('/api/answers/' + id, answer)
      .map((res:Response) => res.json())
      .toPromise()
  }

  vote(id, number){
      return this._http.get('/api/vote/' + id + '/' + number)
      .map((res:Response) => res.json())
      .toPromise()
  }

  delete(id){
      return this._http.delete("/api/delete/"+id)
      .map(data => data.json()).toPromise()
  }

}
