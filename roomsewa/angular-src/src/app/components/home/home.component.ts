import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../Services/hotel.service';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router/src/directives/router_link';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  place: string;
  hotels: Object;
  rooms:Object;

  constructor(private hotelService: HotelService,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  // calls getHotel() method on authService to fetch the list of hotels from server
  onFindSubmit() {

    let loc ={
      place: this.place
    };

    this.hotelService.getHotel(loc).subscribe((data) => {
      if (data) {
        console.log('data',data);
        this.hotels = data;
        this.flashMessage.show('Oops! No hotels found on this location!', { cssClass: 'alert-danger' });
      } else {
        this.flashMessage.show('Oops! No hotels found on this location!', { cssClass: 'alert-danger' });
      }
    });
  }

  // Display Map
  onClickMap(x: any) {
    const lat = x.lat;
    const lon = x.lon;
    this.router.navigate(['geolocation', lat, lon]);
  }
  
}
