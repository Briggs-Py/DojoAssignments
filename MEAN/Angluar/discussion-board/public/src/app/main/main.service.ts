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

  getTopics(){
      return this._http.get('/api/topics')
      .map((topics:Response) => topics.json())
      .toPromise()
  }

  getTopic(id){
      return this._http.get('/api/topic/' + id)
      .map((topic:Response) => topic.json())
      .toPromise()
  }

  createTopic(topic){
      return this._http.post('/api/topics', topic)
      .map((topic:Response) => topic.json())
      .toPromise()
  }

  createPost(post, id){
      return this._http.post('/api/posts/' + id, post)
      .map((res:Response) => res.json())
      .toPromise()
  }

  createComment(comment, id){
      return this._http.post('/api/comments/' + id, comment)
      .map((res:Response) => res.json())
      .toPromise()
  }

  like(id){
      return this._http.get('/api/likes/' + id)
      .map((res:Response) => res.json())
      .toPromise()
  }
}
