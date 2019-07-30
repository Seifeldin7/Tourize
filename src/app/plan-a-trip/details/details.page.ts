import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { ItenraryService } from "src/app/itenrary.service";
import { FormGroup, FormControl } from "@angular/forms";
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../../popover/popover.component';
@Component({
  selector: "app-details",
  templateUrl: "./details.page.html",
  styleUrls: ["./details.page.scss"]
})
export class DetailsPage implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private itenService: ItenraryService,
    private router: Router,
    public popoverController: PopoverController
  ) {}
  form: FormGroup;
  path_id: number;
  iten_id: number;
  origin:string;
  departure_date:string;
  arrival_date:string;
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.path_id = +params["id2"];
      this.iten_id = +params["id1"];
    });
    const stop = this.itenService.getStopById(this.iten_id,this.path_id);
    if(stop){
      this.origin=stop.origin;
      this.departure_date = stop.departure_date;
      this.arrival_date = stop.arrival_date;
    }
    
    this.form = new FormGroup({
      origin: new FormControl(this.origin, {
        updateOn: 'blur',
      }),
     
      departure_date: new FormControl(null, {
        updateOn: 'blur',
      }),
      arrival_date: new FormControl(null, {
        updateOn: 'blur',
      }),
     })
    
  }
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
  onConfirm(){
    if(this.itenService.getItenrary(this.iten_id)){
      this.itenService.addStopDetails(this.itenService.getItenrary(this.iten_id),this.path_id,
        this.form.value.origin,
        this.form.value.arrival_date,
        this.form.value.departure_date
      )
      this.router.navigate(['/plan-a-trip/2',this.iten_id]);
    }
    
  }
  
}
