import { Component } from "@angular/core";
import {
  NavController,
  NavParams,
  LoadingController,
  ToastController
} from "@ionic/angular";
//import { UserProvider } from "../../providers/user/user";
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from "@angular/forms";
import { userService } from 'src/app/Services/user.service';

@Component({
  selector: "app-signup",
  templateUrl: "./signup.page.html",
  styleUrls: ["./signup.page.scss"]
})
export class SignupPage {
  newuser = { email: "", username: "", password: "", cnfpassword: "" };
  email: AbstractControl;
  username: AbstractControl;
  password: AbstractControl;
  cnfpass: AbstractControl;

  authForm: FormGroup;
  passwordtype: string = "password";
  cnfpasswordtype: string = "password";
  cnfpasseye: string = "eye";
  passeye: string = "eye";
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public userService: userService,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public fb: FormBuilder
  ) {
    this.authForm = this.fb.group({
      username: [null, Validators.compose([Validators.required])],
      email: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])],
      cnfpass: [null, Validators.compose([Validators.required])]
    });
    this.username = this.authForm.controls["username"];
    this.email = this.authForm.controls["email"];
    this.password = this.authForm.controls["password"];
    this.cnfpass = this.authForm.controls["cnfpass"];
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad RagisterPage");
  }
  doSignup() {
    // let toaster = this.toastCtrl.create({
    //   message: "Error Code ",
    //   duration: 3000,
    //   position: "bottom"
    // });
    // if (
    //   this.newuser.email == "" ||
    //   this.newuser.password == "" ||
    //   this.newuser.username == ""
    // ) {
    //   //toaster.setMessage('All field are Required!');
    //   //toaster.present();
    // } else if (this.newuser.password.length < 7) {
    //   //toaster.setMessage('Password is Not Strong');
    //   //toaster.present();
    // } else {
    //   if (this.newuser.password == this.newuser.cnfpassword) {
    //     this.loadingCtrl.create({
    //       message: "Please wait"
    //     }).then(loadingEl => {
    //       loadingEl.present();
        
    //     this.userService.adduser(this.newuser).then(res => {
    //       this.loadingCtrl.dismiss();
    //       if (res) {
    //         this.navCtrl.push("ProfilepicPage");
    //       } else {
    //         alert("Error" + res);
    //       }})
    //     });
    //   } else {
    //     //toaster.setMessage("Both Password not matched");
    //     //toaster.present();
    //   }
    
    // }
  }
  doLogin() {
    //this.navCtrl.setRoot("LoginPage");
  }
  managePassword() {
    if (this.passwordtype == "password") {
      this.passwordtype = "text";
      this.passeye = "eye-off";
    } else {
      this.passwordtype = "password";
      this.passeye = "eye";
    }
  }
  managecnfPassword() {
    if (this.cnfpasswordtype == "password") {
      this.cnfpasswordtype = "text";
      this.cnfpasseye = "eye-off";
    } else {
      this.cnfpasswordtype = "password";
      this.cnfpasseye = "eye";
    }
  }
}
