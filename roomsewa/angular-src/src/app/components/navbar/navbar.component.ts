import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user : any ;
  constructor(private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService) {this.user = localStorage.name; }

  ngOnInit() {
  }
  onLogoutClick(){
    this.authService.logOut();
    this.flashMessage.show('You are Logged Out!', {cssClass: 'alert-danger', timeout: 500});
    this.router.navigate(['']);
  }
}
