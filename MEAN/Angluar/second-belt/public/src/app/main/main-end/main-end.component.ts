import { Component, OnInit } from '@angular/core';
import { MainService } from './../main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-end',
  templateUrl: './main-end.component.html',
  styleUrls: ['./main-end.component.css']
})
export class MainEndComponent implements OnInit {
    products: Array<any>;
    user: any;

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
  
}
