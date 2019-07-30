import { Component, OnInit } from '@angular/core';
import {ItenraryService} from '../../../itenrary.service'
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
 detail_type:string;
  constructor(private itenService:ItenraryService) { }

  ngOnInit() {
    
  }

}
