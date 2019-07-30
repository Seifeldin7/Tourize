import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params,Router } from '@angular/router';
import { userService } from 'src/app/Services/user.service';
import { User } from 'src/app/Models/user.model';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.page.html',
  styleUrls: ['./chat-list.page.scss'],
})
export class ChatListPage implements OnInit {

  constructor(private us:userService, private route:ActivatedRoute) { }

  users_list:User=null;
  id:Number=0;

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params) => {
        console.log(params);
        this.id = +params['id'];
      }
    );
    this.users_list = this.us.get_chat_list(this.id);
  }

}
