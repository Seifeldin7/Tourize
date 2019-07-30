import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Question } from 'src/app/Models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  onChangeQuestions = new Subject<Question[]>();

  private q1 = new Question(0,"Where would you prefer to travel?",["Sun, Sea, And party","A nice city with great food, views and museums ","A completely new continent ","I like adventures"]);
  private q2 = new Question(100,"How would you like to travel with friends ?",["Train","Ultimate Road-trip","Bike ","Flying is fun!"]);
  private q3 = new Question(290,"Prepare to pack or pack to prepare ?",["I knew I had a suitcase somewhere around here...."," I have everything ready and just need to get started ","Everything is packed 72h before check in","I will pack shirts, shoes, jeans, toothbrush, passport, what else ?"]);
  private questions = [this.q1,this.q2,this.q3];

  constructor() { }

  setter(){
    // this.questions = [this.q1,this.q2,this.q3];
    // this.onChangeQuestions.next(this.questions.slice());
  }

  get_questions(){
    return this.questions.slice();
    // return this.questions;
  }
  post_answers(){
      
  }
}
