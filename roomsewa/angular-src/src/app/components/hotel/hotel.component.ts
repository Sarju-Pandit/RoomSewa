import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent {
  lat: Number;
  lng: Number;

  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(params => {
      const latitude = parseFloat(params['lat']);
      const longitude = parseFloat(params['lon']);

      // Set default value if lat and lon is undefined
      if (!latitude || !longitude) {
        this.lat = 51.678418;
        this.lng = 7.809007;
      } else {
        this.lat = latitude;
        this.lng = longitude;
      }
    });
  }
}
