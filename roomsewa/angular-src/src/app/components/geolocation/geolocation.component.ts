import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.css']
})
export class GeolocationComponent {

  title: string = 'Map';
  lat: number = 51.678418;
  lng: number = 7.809007;
}
