import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelService } from '../../Services/hotel.service';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-confirm-page',
  templateUrl: './confirm-page.component.html',
  styleUrls: ['./confirm-page.component.css']
})
export class ConfirmPageComponent implements OnInit {

  room:string;
  hotelName:string;
  roomType:string;
  roomPrice:any;


 // confirmationOfHotel: any[];
  constructor( private route: ActivatedRoute, private hotelService:HotelService) { 
  }

  ngOnInit() {

    this.roomPrice=this.route.snapshot.params['roomPrice'];
    this.roomType=this.route.snapshot.params['roomType'];
    console.log('roomType',this.roomType);
    console.log('p',this.route.snapshot.params);
     this.hotelName=this.route.snapshot.params['hotelName'];
    console.log('hotelName',this.hotelName);
 
 

}


}