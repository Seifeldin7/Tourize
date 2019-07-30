import { Component, OnInit } from '@angular/core';
import { userService } from '../Services/user.service';
import { User } from 'src/app/Models/user.model';

@Component({
  selector: 'app-matching',
  templateUrl: './matching.page.html',
  styleUrls: ['./matching.page.scss'],
})
export class MatchingPage implements OnInit {

  constructor(private us:userService) { }
  users:User[] = null;
  id:number=0;
  ngOnInit() {
    this.users = this.us.get_matched();
    console.log(this.users);
  }

}
