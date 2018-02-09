import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { ValidateService } from '../../Services/validate.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;
  returnUrl: string;
  constructor(private authService: AuthService,
    private router: Router,
    private route:ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private validateService: ValidateService) { }

  ngOnInit() {
    console.log('route',this.route.snapshot);
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  onLoginSubmit() {
    const user = {
      username: this.username,
      password: this.password
    };
    // Validate Required Fields
    if (!this.validateService.validateLogin(user)) {
      this.flashMessage.show('Please fill in all fields!', { cssClass: 'alert-danger', timeout: 1000 });
      return false;
    }

    this.authService.authenticateUser(user).subscribe((data) => {
      if (data.success) {
        this.authService.storeUserData(data.token, data.user);
        this.flashMessage.show('Successfully LoggedIn', { cssClass: 'alert-success', timeout: 1000 });
        this.router.navigate(['home']);
      }
      else {
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger' , timeout: 1000});
        this.router.navigate(['./authenticate']);
      }
    });
  }
}
