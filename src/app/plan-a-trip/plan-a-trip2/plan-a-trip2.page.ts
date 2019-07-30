import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { ItenraryService } from "src/app/itenrary.service";
import { FormGroup, FormControl } from "@angular/forms";
import { Itenrary } from "src/app/itenrary.model";
import { LoadingController, ModalController } from '@ionic/angular';
import { GameModalComponent } from '../game-modal/game-modal.component';

@Component({
  selector: "app-plan-a-trip2",
  templateUrl: "./plan-a-trip2.page.html",
  styleUrls: ["./plan-a-trip2.page.scss"]
})
export class PlanATrip2Page implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itenService: ItenraryService,
    private loadingCtrl: LoadingController,
    private modalController: ModalController,

  ) {}
  dests: String[] = ["Egypt","England"];
  id: number;
  stops: any[];
  iten_id: number;
  stop_added = true;
  stop_destination = "";
  form: FormGroup;
  title: string;
  arrival_date: string;
  departure_date: string;
  dest: string;
  desc: string;
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.iten_id = +params["id1"];
    });
    const iten = this.itenService.getItenrary(this.iten_id);
    if (iten) {
      this.stops = iten.paths;
      this.title = iten.title;
      this.dest =  iten.dest;
      this.desc = iten.description;
      this.arrival_date = iten.arrival_date;
      this.departure_date = iten.departure_date;
    }
    this.form = new FormGroup({
      title: new FormControl("My Itenrary", {
        updateOn: "blur"
      }),
      desc: new FormControl("A wonderful trip in England and the USA.", {
        updateOn: "blur"
      }),
      departure_date: new FormControl("5/8/2019", {
        updateOn: "blur"
      }),
      arrival_date: new FormControl("20/8/2019", {
        updateOn: "blur"
      }),
      dest: new FormControl("England", {
        updateOn: "blur"
      })
    });
  }
  onAddStop() {
    this.stop_added = false;
  }
  toggleSection(i: number) {
    this.stops[i].open = !this.stops[i].open;
  }
  onAddAccomodation(i: number) {
    this.itenService.setSelect(0);
    this.itenService.setViewMode(false);
    this.openModal("Here, you should give a name to the place you're staying at. Also, you can add its type (hotel, hostel, ...), price and other related fields.",0);
    this.onNavigate();
    this.router.navigate([
      "/plan-a-trip/accomodation/",
      this.iten_id,
      this.stops[i].id
    ]);
  }
  onAddDetails(i: number) {
    this.itenService.setSelect(1);

    this.itenService.setViewMode(false);
    this.openModal("Here, you should specify the country/city in which you would be at with an arrival date and when you would depart.",3);
    this.onNavigate();
    this.router.navigate([
      "/plan-a-trip/details/",
      this.iten_id,
      this.stops[i].id
    ]);
  }
  onAddActivities(i: number) {
    this.itenService.setSelect(2);

    this.itenService.setViewMode(false);
    this.openModal("First, you can choose a certain type of activities you want to do while travelling (hiking, sightseeing, ...), a place, the provider of this activity, start time and end time.",2);
    this.onNavigate();
    this.router.navigate([
      "/plan-a-trip/activities/",
      this.iten_id,
      this.stops[i].id
    ]);
  }
  onAddTransport(i: number) {
    this.itenService.setSelect(3);

    this.itenService.setViewMode(false);
    this.openModal("First, you can choose a certain type of transports (bus, taxi, plane, ...). Then, other related information about this means of transport can be filled (cost, start time of the transportation, end time, ...)",1);
    this.onNavigate();
    this.router.navigate([
      "/plan-a-trip/transport/",
      this.iten_id,
      this.stops[i].id
    ]);
  }

  onDelete(i: number) {
    this.itenService.removeStop(this.iten_id, i);
  }
  onSubmit() {
    this.stop_added = false;
    this.id = Math.random();
    
    this.itenService.addStop(this.iten_id, this.id, this.stop_destination);
    this.stops = this.itenService.getItenrary(this.iten_id).paths;
    this.stop_added = true;
    this.stop_destination = "";
  }
  onSaveItenrary() {
    this.onNavigate();
    //this.router.navigate(['/plan-a-trip/decide',this.iten_id]);

    this.loadingCtrl
    .create({
      message: 'Saving...'
    })
    .then(loadingEl => {
      loadingEl.present();
      this.itenService.postItenrary(this.itenService.getItenrary(this.iten_id)).subscribe((res:any) => {
        loadingEl.dismiss();
        this.router.navigate(['/plan-a-trip/decide',this.iten_id]);
      }, err =>{
        
        });
    });
    
  }
  onNavigate() {
    const iten: Itenrary = this.itenService.getItenrary(this.iten_id);
    this.itenService.addIteninfo(
      iten,
      this.form.value.title,
      this.form.value.departure_date,
      this.form.value.arrival_date,
      this.form.value.dest,
      this.form.value.desc
    );
  }
  async openModal(text:string,img_id:number) {
    const modal = await this.modalController.create({
      component: GameModalComponent,
      componentProps:{text:text,img_id:img_id}
    });
    await modal.present();
  }
}
