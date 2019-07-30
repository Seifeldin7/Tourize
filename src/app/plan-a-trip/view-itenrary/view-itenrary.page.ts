import { Component, OnInit } from "@angular/core";
import { ItenraryService } from "src/app/itenrary.service";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { Itenrary } from "src/app/itenrary.model";
import { Subject } from "rxjs";
import { LoadingController } from '@ionic/angular';

@Component({
  selector: "app-view-itenrary",
  templateUrl: "./view-itenrary.page.html",
  styleUrls: ["./view-itenrary.page.scss"]
})
export class ViewItenraryPage implements OnInit {
  iten_id: number;
  SurpriseFlag:boolean;
  iten: Itenrary;
  itenraries:any
  // iten: Itenrary = new Itenrary(
  //   0,
  //   "Wonderful trip",
  //   "1-1-2010",
  //   "1-1-2010",
  //   "Egypt",
  //   "great trip",
  //   [
  //     {
  //       id: 0,
  //       open: false,
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
  //       housing: [{ name: null, location: null, price: null, type: null }],
  //       activities: [
  //         { type: null, location: null, end_time: null, start_time: null }
  //       ]
  //     },
  //     {
  //       id: 0,
  //       open: false,
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
  //       housing: [{ name: null, location: null, price: null, type: null }],
  //       activities: [
  //         { type: null, location: null, end_time: null, start_time: null }
  //       ]
  //     }
  //   ]
  // );
  constructor(
    private route: ActivatedRoute,
    private itenService: ItenraryService,
    private router: Router,
    private loadingCtrl:LoadingController
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.iten_id = +params["id1"];
    });
    this.SurpriseFlag = this.itenService.getSurpriseMode();
    if (this.SurpriseFlag) {
     //this.iten = this.itenService.getSurpriseItenrary(this.iten_id);
    } else {
      this.itenService.fetch_itenraries().subscribe(
        (itenraries)=>{
          this.itenraries = itenraries;
          this.iten =  this.itenraries.filter(x => x.id == this.iten_id)[0];
          console.log(this.iten)
        });
    }
  }

  onEditActivities(i: number) {
    this.itenService.setViewMode(true);
    const path_id = this.iten.paths[i].id;
    this.router.navigate(["/plan-a-trip/activities", this.iten_id, path_id]);
  }
  onEditTransportation(i: number) {
    this.itenService.setViewMode(true);
    const path_id = this.iten.paths[i].id;
    this.router.navigate(["/plan-a-trip/transport", this.iten_id, path_id]);
  }
  onEditAccomodation(i: number) {
    this.itenService.setViewMode(true);
    const path_id = this.iten.paths[i].id;
    this.router.navigate(["/plan-a-trip/accomodation", this.iten_id, path_id]);
  }
  onAdd(){
    this.itenService.postItenrary(this.iten);
      /*this.loadingCtrl
    .create({
      message: 'Adding...'
    })
    .then(loadingEl => {
      loadingEl.present();
      this.itenService.postItenrary(this.iten).subscribe((res:any) => {
        this.router.navigate(['/plan-a-trip/decide',this.iten_id]);
      }, err =>{
        
        });
    });
    */
  }
}
