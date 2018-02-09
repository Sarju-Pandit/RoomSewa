import { Injectable} from '@angular/core';
import { Router, CanActivate} from '@angular/router';
import { AuthService} from '../Services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private authService : AuthService, private router : Router ){}

    canActivate(){
        // if(this.authService.loggedIn()){
        //     return true;
        // } 
        if (localStorage.getItem('name')) {
            // logged in so return true
            return true;
        }
        else {
            this.router.navigate(['/authenticate']);
            return false;
        }
    }
}