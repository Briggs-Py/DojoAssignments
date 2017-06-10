import { Component, OnInit } from '@angular/core';
import { MainService } from './../main.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-show',
  templateUrl: './main-show.component.html',
  styleUrls: ['./main-show.component.css']
})
export class MainShowComponent implements OnInit {
  topic: any;
  topic_id: String;
  user: any;

  constructor(private _mainService: MainService,
  private _route: Router, private _router: ActivatedRoute) { }

  ngOnInit() {
      this._router.params.subscribe((param)=>{
        this.topic_id = param.id;
      })
      this.getTopic(this.topic_id);

      this.getCurrentUser()
  }

  getCurrentUser(){
      this._mainService.getCurrent()
      .then((user) => this.user = user)
      .catch((err) => this._route.navigate(['']))
  }

  getTopic(id){
      this._mainService.getTopic(id)
      .then((topic) => {
          this.topic = topic
          console.log(this.topic);
      })
      .catch((err) => console.log(err))
  }

  createPost(formData, id){
      this._mainService.createPost(formData.value, id)
      .then(()=> {
          formData.reset()
          this.getTopic(this.topic_id);
      })
      .catch( err => console.log(err))
  }

  createComment(formData, id){
      this._mainService.createComment(formData.value, id)
      .then(() =>{
          formData.reset()
          this.getTopic(this.topic_id);
      })
      .catch( err => console.log(err))
  }

}
