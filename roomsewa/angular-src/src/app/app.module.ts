import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http'



import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';


import { ValidateService } from './Services/validate.service';
import { AuthService } from './Services/auth.service';
import {HotelService} from './Services/hotel.service';
import { AuthGuard } from './guards/auth.guard';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service';
import { HotelComponent } from './components/hotel/hotel.component';
import { HotelDetailsComponent } from './components/hotel-details/hotel-details.component';

import { ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { GeolocationComponent } from './components/geolocation/geolocation.component';
import { Http } from '@angular/http/src/http';
import { RoomDetailsComponent } from './components/room-details/room-details.component';
import { ConfirmPageComponent } from './components/confirm-page/confirm-page.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { CanReserveGuard } from './guards/can-reserve.guard';
import { ConfirmGuardGuard } from './guards/confirm-guard.guard';

const appRoute: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'authenticate', component: LoginComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'geolocation/:lat/:lon', component: HotelComponent },
  { path: 'home/:roomType/:roomPrice/:hotelName', component: ConfirmPageComponent, canActivate: [CanReserveGuard] },
  { path: 'home/:roomType/:roomPrice/:hotelName/:roomType/:roomPrice', component: InvoiceComponent, canActivate: [ConfirmGuardGuard] },
  //  { path: '**', component: HomeComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    ProfileComponent,
    HotelComponent,
    HotelDetailsComponent,
    GeolocationComponent,
    RoomDetailsComponent,
    ConfirmPageComponent,
    InvoiceComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    FlashMessagesModule,
    HttpModule,
    HttpClientModule,
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC0fBZVHcDpPM620wwOLNttkrf2BN0wtFg'
    })
  ],
  providers: [ValidateService, FlashMessagesService, AuthService, AuthGuard, HotelService, CanReserveGuard, ConfirmGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
