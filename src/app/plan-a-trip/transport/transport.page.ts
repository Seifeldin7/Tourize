import { Component, OnInit } from "@angular/core";
import { Params, ActivatedRoute, Router } from "@angular/router";
import { ItenraryService } from "src/app/itenrary.service";
import { FormGroup, FormControl } from "@angular/forms";
import { IonItemSliding, PopoverController } from '@ionic/angular';
import { PopoverComponent } from "../../popover/popover.component";

@Component({
  selector: "app-transport",
  templateUrl: "./transport.page.html",
  styleUrls: ["./transport.page.scss"]
})
export class TransportPage implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private itenService: ItenraryService,
    private router: Router,
    public popoverController: PopoverController
  ) {}
  form: FormGroup;
  path_id: number;
  iten_id: number;
  viewMode:boolean;
  transport_added = true;
  transportations: any[];
  types: any[] = ["bus", "taxi", "plane", "train"];
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.path_id = +params["id2"];
      this.iten_id = +params["id1"];
    });
    this.viewMode=this.itenService.getViewMode();
    this.transportations = this.itenService.getStopById(this.iten_id, this.path_id).transportation;

    this.form = new FormGroup({
      type: new FormControl(null, {
        updateOn: "blur"
      }),
      price: new FormControl(null, {
        updateOn: "blur"
      }),
      provider: new FormControl(null, {
        updateOn: "blur"
      }),
      start_time: new FormControl(null, {
        updateOn: "blur"
      }),
      end_time: new FormControl(null, {
        updateOn: "blur"
      })
    });
  }
  onConfirm() {
    this.router.navigate(["/plan-a-trip/2", this.iten_id]);
  }
  onAddTansport() {
    this.transport_added = false;
  }
  onCofirmAdd() {
    if (this.itenService.getItenrary(this.iten_id)) {
      this.itenService.addTransportation(
        this.itenService.getItenrary(this.iten_id),
        this.path_id,
        {
          type:this.form.value.type,
          price:this.form.value.price,
          provider:this.form.value.provider,
          start_time:this.form.value.start_time,
          end_time:this.form.value.end_time,
        }
      );
    }
    this.transport_added = true;
  }
  onDeleteTransport(transport:any,slidingEl: IonItemSliding){

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