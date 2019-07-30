import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute,Params,Router } from '@angular/router';
import { switchMapTo, switchMap, take, tap, map } from 'rxjs/operators';
import { Message } from '../../Models/message.model';
import { ModalController, IonContent } from '@ionic/angular';
import { AgendaComponent } from './agenda/agenda.component';
import { HttpClient } from '@angular/common/http';
import { userService } from 'src/app/Services/user.service';
import { User } from 'src/app/Models/user.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  constructor(private us:userService, private http:HttpClient, private modalController: ModalController, private route:ActivatedRoute) { }
  private name:String;
  sender:User = null;
  reciever:User = null;
   messages = [
  ];
  createdAt:any;
  private new_message:String='';
  @ViewChild(IonContent,{read:true,static:true}) content: IonContent;
  ngOnInit() {
    this.route.params.subscribe(
      (params:Params) => {
        console.log(params);
        this.sender = this.us.chat_get_users(+params['name1']);
        this.reciever = this.us.chat_get_users(+params['name2']);
        console.log(this.sender);
        console.log(this.reciever);
      }
    );
    this.http.get('https://tourize-sys.firebaseio.com/chat.json').subscribe(
      resData => {
        console.log(resData);
        const arr1 = Object.entries(resData)
        console.log(arr1);
        for(let r of arr1){
          this.messages.push(r[1]);
        }
        console.log(this.messages);
      }
    );

    // this.messages = this.http.get('https://tourize-sys.firebaseio.com/chat.json')
  }
  sendMessage(){
    if(this.new_message.trim().length != 0){
      const new_msg = new Message(this.sender.id,this.reciever.id,this.new_message,new Date().getTime());
      this.messages.push(new_msg);
      this.new_message = '';
      setTimeout(() => {
        this.content.scrollToBottom(200);
      });
      this.http.post('https://tourize-sys.firebaseio.com/chat.json',{...new_msg}).subscribe(
        (err:any)=>{
          console.log(err);
        }
      );
      // console.log("sending");
    }
    else{
      console.log("cannot send empty message!!!");
      this.new_message = '';
    }
  }
  async openAgenda() {
    const modal = await this.modalController.create({
      component: AgendaComponent
    });
    await modal.present();
  }


}
