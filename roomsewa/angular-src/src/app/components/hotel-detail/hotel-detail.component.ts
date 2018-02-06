

import { Component, OnInit, Input } from '@angular/core';
import { HotelService } from '../../Services/hotel.service';
import { HomeComponent } from '../home/home.component';
import { ActivatedRoute } from '@angular/router';
// import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css'],
})
export class HotelDetailComponent implements OnInit {
  flashMessage: any;
  hotels:Object;
  place:string;


  constructor(private hotelService:HotelService, private route:ActivatedRoute)
  {
  
   
  }

  ngOnInit() {
    //fetching the value of parameter from route.snapshot
    this.place=this.route.snapshot.params['place'];
    //subscribing to get the data
    this.hotelService.getHotel(this.place).subscribe( (data) => {
      if (data) {
        this.hotels = data;
        console.log(JSON.stringify(this.hotels));
      } else {
        this.flashMessage.show('Oops! No hotels found on this location!', { cssClass: 'alert-danger' });
      }
    });

 

  }
 

}



