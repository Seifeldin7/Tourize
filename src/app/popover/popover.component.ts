import { Component, OnInit } from '@angular/core';
import { ItenraryService } from '../itenrary.service';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit  {
  items:any;
  constructor(private itenService:ItenraryService) {
    
   }
   ngOnInit(){
     if(this.itenService.getSelect()==0){
        this.items = [{link:'www.booking.com',name:'Booking'},{link:'www.hotels.com',name:'Hotels'}];
     }
     else if(this.itenService.getSelect()==1){
      this.items = [{link:'www.lonelyplanet.com',name:'Lonelyplanet'},{link:'www.tripadvisor.com',name:'Tripadvisor'}];
     }
     else if(this.itenService.getSelect()==3){
      this.items = [{link:'www.skyscanner.com',name:'Skyscanner'}];

     }
     else{
      this.items = [{link:'www.lonelyplanet.com',name:'Lonelyplanet'},{link:'www.tripadvisor.com',name:'Tripadvisor'}];
     }
   }

}
