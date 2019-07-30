import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { FormGroup, FormControl } from "@angular/forms";
import { ItenraryService } from "src/app/itenrary.service";
import { PopoverComponent } from "../../popover/popover.component";
import { PopoverController } from "@ionic/angular";

@Component({
  selector: "app-accomodation",
  templateUrl: "./accomodation.page.html",
  styleUrls: ["./accomodation.page.scss"]
})
export class AccomodationPage implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private itenService: ItenraryService,
    private router: Router,
    public popoverController: PopoverController
  ) {}
  form: FormGroup;
  path_id: number;
  iten_id: number;
  types: string[] = ["apartment", "hostel", "hotel"];
  accomodation: any;
  viewMode:boolean;
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.path_id = +params["id2"];
      this.iten_id = +params["id1"];
    });
    this.viewMode=this.itenService.getViewMode();
    if (this.itenService.getStopById(this.iten_id, this.path_id)) {
      this.accomodation = this.itenService.getStopById(
        this.iten_id,
        this.path_id
      ).housing;
    }
    

    this.form = new FormGroup({
      name: new FormControl(this.accomodation[0].name, {
        updateOn: "blur"
      }),
      price: new FormControl(this.accomodation[0].price, {
        updateOn: "blur"
      }),
      type: new FormControl(this.accomodation[0].type, {
        updateOn: "blur"
      }),
      departure_date: new FormControl(null, {
        updateOn: "blur"
      }),
      arrival_date: new FormControl(null, {
        updateOn: "blur"
      })
    });
  }
  onConfirm() {
    this.itenService.setViewMode(false);
    if (this.itenService.getItenrary(this.iten_id)) {
      this.itenService.addHousing(
        this.itenService.getItenrary(this.iten_id),
        this.path_id,
        {
          name: this.form.value.name,
          location: null,
          price: this.form.value.price,
          type: this.form.value.type,
          
        }
      );
      this.router.navigate(["/plan-a-trip/2", this.iten_id]);
    }
  }
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
}
}