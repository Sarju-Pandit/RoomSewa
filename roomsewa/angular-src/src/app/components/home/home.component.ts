import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../Services/hotel.service';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  place : string;

  hotels : Object;

  constructor(private hotelService : HotelService,
              private flashMessage : FlashMessagesService) { }

  ngOnInit() {
  }
  onFindSubmit(){
  let place = this.place;
    this.hotelService.getHotel(place).subscribe( (data) => {
      if (data) {
        this.hotels = data;
        console.log(JSON.stringify(this.hotels));
      } else {
        this.flashMessage.show('Oops! No hotels found on this location!', { cssClass: 'alert-danger' });
      }
    });
  }

}
