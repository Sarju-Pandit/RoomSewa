import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }


  // Validation for Register
  validateRegister(user) {
    if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
      return false;
    } else {
      return true;
    }
  }

  // Validation for Email 
  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }


// Validation for Login Form
  validateLogin(user) {
    if (user.username == undefined || user.password == undefined) {
      return false;
    } else {
      return true;
    }
  }
}

