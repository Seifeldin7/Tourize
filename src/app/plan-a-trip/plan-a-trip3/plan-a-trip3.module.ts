import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PlanATrip3Page } from './plan-a-trip3.page';


const routes: Routes = [
  {
    path: '',
    component: PlanATrip3Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PlanATrip3Page]
})
export class PlanATrip3PageModule {}
