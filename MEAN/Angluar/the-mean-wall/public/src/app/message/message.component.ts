import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  messages: Array<any>;
  user: any;

  constructor(private _messageService: MessageService,
  private _router: Router) { }

  ngOnInit() {
      this.getCurrentUser()
      this.getAllMessages()
  }

  getCurrentUser(){
      this._messageService.getCurrent()
      .then((user) => this.user = user)
      .catch((err) => this._router.navigate(['']))
  }

  getAllMessages(){
      this._messageService.getMessages()
      .then((messages) => this.messages = messages)
      .catch((err) => console.log(err))
  }

  createMessage(formData){
      this._messageService.createMessage(formData.value)
      .then(()=> {
          formData.reset()
          this.getAllMessages();
      })
      .catch((err)=> this._router.navigate(['']))
  }

  createComment(formData, message_id){
      this._messageService.createComment(formData.value, message_id)
      .then(() =>{
          this.getAllMessages();
      })
      .catch( err => console.log(err))
  }

}
