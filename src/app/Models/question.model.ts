export class Question{

  id: Number;
  question: String;
  choices: String[];

  constructor(id: Number,question: String,choices: String[]){
    this.id=id;
    this.question=question;
    this.choices=choices;
  }
}
