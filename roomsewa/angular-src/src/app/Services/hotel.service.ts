import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';
import { RequestOptionsArgs } from '@angular/http/src/interfaces';

@Injectable()
export class HotelService {
  hotels: Object;

  constructor(private http: Http) { }



  // Get Profile
  getHotel(place) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:8080/hotels/ktm', {headers: headers})
      .map(res => res.json());
  }
}
