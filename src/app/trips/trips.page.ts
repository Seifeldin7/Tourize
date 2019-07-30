import { Component, OnInit } from '@angular/core';
import { ItenraryService } from '../itenrary.service';
import { Itenrary } from '../itenrary.model';
import { IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.page.html',
  styleUrls: ['./trips.page.scss'],
})
export class TripsPage implements OnInit {

  constructor(private itenservice:ItenraryService,private router:Router) { }
  my_trips:Itenrary[];
  // my_trips:Itenrary[]=[
  //   new Itenrary(0, "Wonderful trip", "1-1-2010", "1-1-2010", "Egypt",'great trip', [
  //     {
  //       id: 0,
  //       open:false,
  //       origin: "none",
  //       departure_date: "1-1-2010",
  //       arrival_date: "",
  //       dest: "cairo",
  //       transportation: [
  //         {
  //           type: "bus",
  //           price: 1000,
  //           provider: "no one",
  //           start_time: "12:00",
  //           end_time: "1:00"
  //         }
  //       ],
  //       housing: [{ name:null,location: null, price: null, type: null }],
  //       activities: [
  //         { type: null, location: null, end_time: null, start_time: null }
  //       ]
  //     }
  //   ]),new Itenrary(1, "trip", "", "", "Egypt",'great trip', [
  //     {
  //       id: 0,
  //       open:false,
  //       origin: "none",
  //       departure_date: "",
  //       arrival_date: "",
  //       dest: "cairo",
  //       transportation: [
  //         {
  //           type: "bus",
  //           price: 1000,
  //           provider: "no one",
  //           start_time: "12:00",
  //           end_time: "1:00"
  //         }
  //       ],
  //       housing: [{ name:null,location: null, price: null, type: null }],
  //       activities: [
  //         { type: null, location: null, end_time: null, start_time: null }
  //       ]
  //     }
  //   ]),
  // ];
  ngOnInit() {
    this.itenservice.fetch_itenraries().subscribe(itens=>{
      this.my_trips = itens;
    });
  }
  onDeleteItenrary(id:number, slidingEl: IonItemSliding){
    slidingEl.close();
    /*this.loadingCtrl.create({ message: 'Cancelling...' }).then(loadingEl => {
      loadingEl.present();
      this.itenservice.removeItenrary(id).subscribe(() => {
        loadingEl.dismiss();
      });
    });
  }*/
  }
  onView(id:number){
    this.router.navigate(['/plan-a-trip/view-itenrary',id]);
  }
}
