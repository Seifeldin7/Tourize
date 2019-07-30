import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanATripPage } from './plan-a-trip.page';
import { PlanATrip2Page } from './plan-a-trip2/plan-a-trip2.page';
import { PlanATripRoutingModule } from './plan-a-trip-routing.module';
import { PlanATrip3Page } from './plan-a-trip3/plan-a-trip3.page';
import { GameModalComponent } from './game-modal/game-modal.component';
import { PopoverComponent } from '../popover/popover.component';




@NgModule({
  entryComponents: [GameModalComponent,PopoverComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    PlanATripRoutingModule,
    
  ],
  declarations: [PlanATripPage, PlanATrip2Page,PlanATrip3Page,GameModalComponent,PopoverComponent]
})
export class PlanATripPageModule {}
