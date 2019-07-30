import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ItenraryService } from 'src/app/itenrary.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.page.html',
  styleUrls: ['./activities.page.scss'],
})
export class ActivitiesPage implements OnInit {

  constructor(private route: ActivatedRoute,
    private itenService: ItenraryService,
    private router: Router) { }
    form: FormGroup;
    path_id: number;
    iten_id: number;
    actvity_added = true;
    activities:any[];
    types: any[] = ["breakfast", "lunch", "dinner", "hiking","sightseeing"];

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.path_id = +params["id2"];
      this.iten_id = +params["id1"];
    });
    this.activities = this.itenService.getStopById(this.iten_id, this.path_id).activities;
    this.form = new FormGroup({
      type: new FormControl(null, {
        updateOn: "blur"
      }),
      location: new FormControl(null, {
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
  onAddActivity() {
    this.actvity_added = false;
  }
  
  onCofirmAdd(){
    if (this.itenService.getItenrary(this.iten_id)) {
      this.itenService.addActivity(
        this.itenService.getItenrary(this.iten_id),
        this.path_id,
        {
          type:this.form.value.type,
          location:this.form.value.location,
          start_time:this.form.value.start_time,
          end_time:this.form.value.end_time,
        }
      );
    }
    this.actvity_added = true;
  }
}
