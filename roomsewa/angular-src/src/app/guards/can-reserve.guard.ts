import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AuthService} from '../Services/auth.service';
import {Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CanReserveGuard implements CanActivate {
  constructor( private authService : AuthService,
  private router : Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.authService.loggedIn()){
      return true;
    } else {
      this.router.navigate(['authenticate']);
      return false;
    }
  }
}
