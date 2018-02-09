import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../Services/validate.service';
import { AuthService } from '../../Services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;

  constructor(private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router : Router) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }
    // Validate Required Fields
    if (!this.validateService.validateRegister(user)) {
      this.flashMessage.show('Please fill in all fields!', { cssClass: 'alert-danger', timeout: 1000 });
      return false;
    }

    // Validate Email
    if (!this.validateService.validateEmail(user.email)) {
      this.flashMessage.show('Please use a valid email!', { cssClass: 'alert-danger', timeout: 1000 });
      return false;
    }

    // Register user
    this.authService.registerUser(user).subscribe( (data) => {
      if (data.success) {
        this.flashMessage.show('You are now registered!', { cssClass: 'alert-success', timeout: 1000 });
        this.router.navigate(['/login']);
      } else {
        console.log(data);
        this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 1000 });
        this.router.navigate(['./register']);
      }
    }); 
  }
}
