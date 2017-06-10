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

  getProducts(){
      return this._http.get('/api/products')
      .map((products:Response) => products.json())
      .toPromise()
  }

  newBid(bid, name){
      return this._http.post('/api/newbid/'+name, bid)
      .map((product:Response) => {
          console.log(product)
          product.json()
      })
      .toPromise()
  }
  results(){
      return this._http.get('/api/results')
      .map((products:Response) => products.json())
      .toPromise()
  }

}
