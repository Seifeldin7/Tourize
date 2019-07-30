import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss'],
})
export class AgendaComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  private date:boolean=false;
  private acc:boolean=false;
  private plane:boolean=false;
  private activ:boolean=false;
  private meetup:boolean=false;

  ngOnInit() {}

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
    console.log(this.date);
    console.log(this.acc);
    console.log(this.plane);
    console.log(this.activ);
    console.log(this.meetup);
  }
}
