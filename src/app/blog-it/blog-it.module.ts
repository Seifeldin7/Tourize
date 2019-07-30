import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {   FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BlogItPage } from './blog-it.page';

const routes: Routes = [
  {
    path: '',
    component: BlogItPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BlogItPage]
})
export class BlogItPageModule {}
