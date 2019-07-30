import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PlanATrip2Page } from './plan-a-trip2.page';
import { GameModalComponent } from '../game-modal/game-modal.component';

const routes: Routes = [
  {
    path: '',
    component: PlanATrip2Page
  }
];

@NgModule({
  
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PlanATrip2Page]
})
export class PlanATrip2PageModule {}
