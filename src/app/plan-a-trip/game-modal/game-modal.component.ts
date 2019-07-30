import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-game-modal',
  templateUrl: './game-modal.component.html',
  styleUrls: ['./game-modal.component.scss'],
})
export class GameModalComponent implements OnInit {

  text:string;
  img_id:number;
  
  constructor(private modalCtrl: ModalController,navParams: NavParams) {
    this.text = navParams.get( 'text' );
    this.img_id = navParams.get( 'img_id' );
   }
  
  ngOnInit() {
  }
  dismiss() {
    
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}
