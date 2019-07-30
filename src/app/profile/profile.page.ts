import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params,Router } from '@angular/router';
import { userService } from 'src/app/Services/user.service';
import { User } from 'src/app/Models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private us:userService, private route:ActivatedRoute) { }
  user:User = null;
  id:Number = 0;
  urself:boolean = false;
  ngOnInit() {
    this.route.params.subscribe(
      (params:Params) => {
        console.log(params);
        this.id = +params['id']
        this.user = this.us.get_user(this.id);
        if(this.id==1){
          this.urself = true;
        }
        console.log(this.user);
      }
    );
  }
  connect(){
    console.log("connected!!!");
  }
}
