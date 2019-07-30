import { Component, OnInit } from '@angular/core';
import { ItenraryService } from '../itenrary.service';
import { Itenrary } from '../itenrary.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-surprise-me',
  templateUrl: './surprise-me.page.html',
  styleUrls: ['./surprise-me.page.scss'],
})
export class SurpriseMePage implements OnInit {

  constructor(private itenservice:ItenraryService,private router:Router) { }
  surprise_Itenraries:Itenrary[]=[
  new Itenrary(0, "Wonderful trip", "1-1-2010", "1-1-2010", "Egypt",'great trip', [
    {
      id: 0,
      open:false,
      origin: "none",
      departure_date: "1-1-2010",
      arrival_date: "",
      dest: "cairo",
      transportation: [
        {
          type: "bus",
          price: 1000,
          provider: "no one",
          start_time: "12:00",
          end_time: "1:00"
        }
      ],
      housing: [{ name:null,location: null, price: null, type: null }],
      activities: [
        { type: null, location: null, end_time: null, start_time: null }
      ]
    }
  ]),new Itenrary(1, "trip", "", "", "Egypt",'great trip', [
    {
      id: 0,
      open:false,
      origin: "none",
      departure_date: "",
      arrival_date: "",
      dest: "cairo",
      transportation: [
        {
          type: "bus",
          price: 1000,
          provider: "no one",
          start_time: "12:00",
          end_time: "1:00"
        }
      ],
      housing: [{ name:null,location: null, price: null, type: null }],
      activities: [
        { type: null, location: null, end_time: null, start_time: null }
      ]
    }
  ]),
];
  ngOnInit() {
   // this.surprise_Itenraries = this.itenservice.getSuggestedItenraries();
  }
onView(id:number){
  this.itenservice.setSurpriseMode(true);
  this.router.navigate(['/plan-a-trip/view-itenrary',id]);
//this.itenservice.addItenrary(itenrary);
}
}
