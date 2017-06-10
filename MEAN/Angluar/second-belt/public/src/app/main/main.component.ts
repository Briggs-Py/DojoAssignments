import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
    products: Array<any>;
    user: any;
    error: any;

  constructor(private _mainService: MainService,
  private _router: Router) { }

  ngOnInit() {
      this.getAllProducts()
      this.getCurrentUser()
  }

  getCurrentUser(){
      this._mainService.getCurrent()
      .then((user) => this.user = user)
      .catch((err) => this._router.navigate(['']))
  }

  getAllProducts(){
      this._mainService.getProducts()
      .then((products) => {
          this.products = products
          console.log(products)
      })
      .catch((err) => console.log(err))
  }

  newBid(formData, name){
      console.log(formData.value.bid);
      console.log(name);
      this._mainService.newBid(formData.value, name)
      .then(() => this.getAllProducts())
      .catch((err:Response) => this.error=err)
  }

  results(){
      this._mainService.results()
      .then(() => this._router.navigate(['end']))
      .catch((err:Response) => this.error=err)

  }

}
