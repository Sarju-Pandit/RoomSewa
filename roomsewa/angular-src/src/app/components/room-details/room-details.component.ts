
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatSort} from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from "rxjs/Rx";
import { HotelService } from '../../Services/hotel.service';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {

  private subscription: Subscription;
  
  flashMessage: any;
  hotel:string;
  rooms:Object;

  constructor(private hotelService:HotelService,private route: ActivatedRoute) {
    {
      //fetching the value of parameter from route.snapshot
      this.hotel=this.route.snapshot.params['hotel._id'];
      console.log('place',this.hotel);
      //subscribing to get the data
      this.hotelService.getHotel(this.hotel).subscribe( (data) => {
        if (data) {
          console.log('filter',data);
          this.rooms = data.filter(data=>data._id==this.hotel);
          console.log('rooms',this.rooms);
          console.log(JSON.stringify(this.rooms));
        } else {
         // this.flashMessage.show('Oops! No Rooms found on this hotel!', { cssClass: 'alert-danger' });
        }
      });
   
   
     }

   }

   
  ngOnInit() {
    //from the current url, retrieve and assign to id
    console.log('hjdf',this.route.snapshot.params['hotel.name'] );
    let id=this.route.snapshot.params['id'];
  }


}



export interface Hotel {
  typeOfRoom: string;
  numberOfRoomAvailable: string;
  capacity: string;
  cost: string
  confirm:string;
}

const ELEMENT_DATA: Element[] = [
];
