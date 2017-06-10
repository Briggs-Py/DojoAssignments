import { Injectable } from '@angular/core';
import {Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class WallService {

  constructor(private _http:Http) { }

}
