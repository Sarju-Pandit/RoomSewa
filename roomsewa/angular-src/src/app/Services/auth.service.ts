import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  authToken : any;
  user: any;
  constructor(private http : Http) { }

  // Register User
  registerUser(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8080/users/register', user, {headers: headers})
    .map( res => res.json());
  }

  // Authenticate User
  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8080/users/authenticate', user, {headers: headers})
    .map( res => res.json());
  }

  // Get Profile
  getProfile(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:8080/users/profile', {headers: headers})
    .map( res => res.json());
  }

  // Stors token and user to localStorage
  storeUserData(token, user){
    localStorage.setItem('id token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

    // Load Token
    loadToken(){
      const token = localStorage.getItem('id token');
      this.authToken = token;
    }

    //LoggedIn
    loggedIn() {
      this.loadToken();
      if(this.authToken) return true;
      return false;
    }

    // Logout clears the token and user details
  logOut(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
