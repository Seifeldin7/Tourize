import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { BlogService } from "src/app/Services/blog.service";
import { LoadingController } from "@ionic/angular";
import { switchMap } from "rxjs/operators";
import { Capacitor } from "@capacitor/core";
import { userService } from 'src/app/Services/user.service';

// function base64toBlob(base64Data, contentType) {
//   contentType = contentType || "";
//   const sliceSize = 1024;
//   const byteCharacters = window.atob(base64Data);
//   const bytesLength = byteCharacters.length;
//   const slicesCount = Math.ceil(bytesLength / sliceSize);
//   const byteArrays = new Array(slicesCount);

//   for (let sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
//     const begin = sliceIndex * sliceSize;
//     const end = Math.min(begin + sliceSize, bytesLength);

//     const bytes = new Array(end - begin);
//     for (let offset = begin, i = 0; offset < end; ++i, ++offset) {
//       bytes[i] = byteCharacters[offset].charCodeAt(0);
//     }
//     byteArrays[sliceIndex] = new Uint8Array(bytes);
//   }
//   return new Blob(byteArrays, { type: contentType });
// }
@Component({
  selector: "app-addpost",
  templateUrl: "./addpost.page.html",
  styleUrls: ["./addpost.page.scss"]
})
export class AddpostPage implements OnInit {
  form: FormGroup;
  image64: string;
  constructor(
    private router: Router,
    private blogService: BlogService,
    private loadingCtrl: LoadingController,
    private us:userService,
  ) {}

  ngOnInit() {

    this.form = new FormGroup({
      title: new FormControl(null, {
        updateOn: "blur"
      }),
      description: new FormControl(null, {
        updateOn: "blur"
      }),
      image: new FormControl(null)
    });
  }
  onImagePicked(evt: any) {
    // let imageFile;
    // if (typeof imageData === "string") {
    //   try {
    //     imageFile = base64toBlob(
    //       imageData.replace("data:image/jpeg;base64,", ""),
    //       "image/jpeg"
    //     );
    //   } catch (error) {
    //     console.log(error);
    //     return;
    //   }
    // } else {
    //   imageFile = imageData;
    // }
    // this.form.patchValue({ image: imageFile });
    if (Capacitor.isPluginAvailable("Camera")) {
      this.image64 = this.blogService.getImage();
      return;
    }
    
    // const file = evt.target.files[0];
    // if (file) {
    //   const reader = new FileReader();

    //   reader.onload = this.handleReaderLoaded.bind(this);
    //   reader.readAsBinaryString(file);
    //   this.form.patchValue({ image: this.image64 });
    //}
  }
  // handleReaderLoaded(e) {
  //   this.image64 = "data:image/png;base64," + btoa(e.target.result);
  // }
  onConfirm() {
    this.image64 = this.blogService.getImage();
    this.loadingCtrl
      .create({
        message: "Adding Post..."
      })
      .then(loadingEl => {
        loadingEl.present();

        this.blogService
          .addBlog(
            this.form.value.title,
            this.form.value.description,
            this.image64,
            '0'
          )

          .subscribe(() => {
            loadingEl.dismiss();
            this.form.reset();
            this.router.navigate(["/blog-it"]);
          });
      });
  }
}
