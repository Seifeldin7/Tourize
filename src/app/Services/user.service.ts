import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { User } from 'src/app/Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class userService{
    loggedin: User = null;
    // onChangeQuestions = new Subject<user>();
    user1 = new User(0,'peter@something.com','Peter Nabil','/assets/PN.jpg','Cairo');
    user2 = new User(1,'ahmed@something.com','Ahmed Mohammed','/assets/AM.jpg','Cairo');
    user3 = new User(2,'seif@something.com','Seif El Din','/assets/SM.jpg','Cairo');
    user4 = new User(3,'omar@something.com','Omar Magdy','/assets/OM.jpg','Cairo');
    user5 = new User(4,'nagy@something.com','Nagy Raof','/assets/NR.jpg','Cairo');
    user6 = new User(5,'nagy@something.com','London Trip','/assets/g.png','Cairo');

    users = [
      this.user1,this.user2,this.user3,this.user4,this.user5
    ];
    users2 = [
      this.user1,this.user2,this.user3,this.user4,this.user5,this.user6
    ]
    add_user(){
      
    }
    constructor(){}

    get_user(id){
      return this.users[id=id];
    }
    get_matched(){
      return this.users;
    }
    get_chat_list(id){
      return this.user6;
    }
    chat_get_users(id){
      return this.users2[id=id];
    }
}
