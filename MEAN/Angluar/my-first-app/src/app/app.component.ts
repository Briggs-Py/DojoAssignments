import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})

export class AppComponent {

    title :string;

    constructor(private _appService: AppService) {

    }

    ngOnInit() {
        this.title = this._appService.sayHey();
    }
}
