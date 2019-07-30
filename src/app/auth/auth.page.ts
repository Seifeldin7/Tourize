import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(public toastController: ToastController,private facebook: Facebook) { }

  ngOnInit() {

  }
  user : any ={};
  async logForm() {
    console.log("done!!!");
    const toast = await this.toastController.create({
      message: 'logged in successfully',
      duration: 3000,
      animated: true,
      position: 'bottom'
    });
    return await toast.present();
    console.log(this.user);
  }
   loginWithFB() {
    this.facebook
      .login(["email", "public_profile"])
      .then((response: FacebookLoginResponse) => {
        this.facebook
          .api(
            "me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)",
            []
          )
          .then(profile => {
            this.user = {
              email: profile["email"],
              first_name: profile["first_name"],
              picture: profile["picture_large"]["data"]["url"],
              username: profile["name"]
            };
          });
      });

  }
}
