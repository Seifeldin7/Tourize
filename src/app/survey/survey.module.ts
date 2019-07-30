import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { IonicModule } from '@ionic/angular';

import { SurveyPage } from './survey.page';

import { QuestionsService } from '../Services/questions.service';

const routes: Routes = [
  {
    path: '',
    component: SurveyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    SurveyPage, QuestionComponent
  ],
  providers: [
    QuestionsService
  ]
})
export class SurveyPageModule {}
