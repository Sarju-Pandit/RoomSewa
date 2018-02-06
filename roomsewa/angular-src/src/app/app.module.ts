import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {Http, HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http'
import {MaterialModule} from './shared/material.module';


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
import { HotelDetailComponent } from './components/hotel-detail/hotel-detail.component';

const appRoute: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'authenticate', component: LoginComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'hotelDetail/:place', component: HotelDetailComponent }
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
    HotelDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    FlashMessagesModule,
    HttpModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [ValidateService, FlashMessagesService, AuthService, AuthGuard, HotelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
