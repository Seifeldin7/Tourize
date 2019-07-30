import { Component, OnInit } from "@angular/core";
import { MenuController, AlertController } from "@ionic/angular";
import { SegmentChangeEventDetail } from "@ionic/core";

import { Router } from '@angular/router';
import { ItenraryService } from '../itenrary.service';
import { Itenrary } from '../itenrary.model';

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  id:number;
  constructor(private itenService:ItenraryService,
    private router: Router,
    private menuCtrl: MenuController,
    private alertCtrl: AlertController
  ) {}
  ngOnInit() {
    //get Itenraries from database and set in service
    this.itenService.fetch_itenraries().subscribe(
      (itenraries)=>{
        if(itenraries != null){
          console.log(itenraries);
          this.itenService.setItenraries(itenraries);
        }
        else{
          const itens:Itenrary[] = [];
          this.itenService.setItenraries(itens);
        }
      },
      err=>{
        this.alertCtrl
              .create({
                header: 'An error occurred!',
                message: 'Make sure you have an active internet connection then try again later.',
                buttons: [
                  {
                    text: 'Okay',
                    handler: () => {
                      this.router.navigate(['/home']);
                    }
                  }
                ]
              })
              .then(alertEl => {
                alertEl.present();
              });
      }
    );

  }

  onOpenMenu() {
    this.menuCtrl.toggle();
  }

  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
    console.log(event.detail);
  }
  onDesign() {
    
    this.id = Math.random();
    this.itenService.addEmptyItenrary(this.id);
    this.router.navigate(['/plan-a-trip/2', this.id]);
  }
}
