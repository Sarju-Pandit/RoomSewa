import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class HotelService {
  hotels: Object;

  constructor(private http: Http) { }

  // Get Profile
  getHotel(place) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8080/hotels/city',place, {headers: headers})
      .map(res => res.json());
  }
}
