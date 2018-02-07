import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource, MatSort} from '@angular/material';
import { HotelService } from '../../Services/hotel.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  date:any;
  random:any;
  roomType:string;
  roomPrice:number;
  totalPrice:number;
  salesTax:number;
  rp:number;
  

  constructor(private hotelService:HotelService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.date=new Date();
    this.random=Math.floor(Math.random() * 20);
    this.salesTax=5;
    this.roomPrice=this.route.snapshot.params['roomPrice'];
    this.roomType=this.route.snapshot.params['roomType'];
    this.rp=Number(this.roomPrice);
    this.totalPrice=this.rp +this.salesTax;
  }


  export(){
   
 }

}



