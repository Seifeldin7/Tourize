import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/Models/question.model';
import { QuestionsService } from 'src/app/Services/questions.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.page.html',
  styleUrls: ['./survey.page.scss'],
})
export class SurveyPage implements OnInit {

  private questions: Question[] = [];
  private list = [];
  private selected:Boolean=false;
  private ch:String=null;

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor(private qs:QuestionsService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.questions = this.qs.get_questions();
    console.log(this.questions);
    for (var ques of this.questions){
      this.list.push([ques.id,0])
    }
  }
  //   this.qs.get_questions().subscribe(
  //     questions => {
  //       this.questions = questions;
  //       console.log(this.questions);
  //     }
  //   );
  // }


  answer(i:number, choice:String){
    this.list[i][1] = choice;
    console.log(this.list);
  }
  submit(){
    //console.log(this.list);
    this.router.navigate(['home']);
  }

  // delete() {
  //   chip.remove();
  //   this.selected = false;
  // }
  // update(choice:String) {
  //   console.log(choice);
  //   this.ch = choice;
  //   this.selected = true;
  //   this.list[]
  // }

}
