export class Message{
  sender:number;
  reciever:number;
  message:String;
  createdAt:any;
  constructor(sender:number, reciever:number, message:String,createdAt:any){
    this.sender = sender;
    this.reciever = reciever;
    this.message = message;
    this.createdAt = createdAt;
    
  }
}
