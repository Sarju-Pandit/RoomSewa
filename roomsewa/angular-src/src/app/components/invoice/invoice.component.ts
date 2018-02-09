import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { HotelService } from '../../Services/hotel.service';
import { ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  date: any;
  random: any;
  roomType: string;
  roomPrice: number;
  totalPrice: number;
  salesTax: number;
  rp: number;


  constructor(private hotelService: HotelService, private route: ActivatedRoute,
    private flash: FlashMessagesService) {
    this.flash.show("YOUR ROOM IS CONFIRMED!", { cssClass: 'alert-success', timeout: 1000 });
  }

  ngOnInit() {
    this.date = new Date();
    this.random = Math.floor(Math.random() * 20);
    this.salesTax = 5;
    this.roomPrice = this.route.snapshot.params['roomPrice'];
    this.roomType = this.route.snapshot.params['roomType'];
    this.rp = Number(this.roomPrice);
    this.totalPrice = this.rp + this.salesTax;
  }


  // Print Documents
  print(): void {
    let printContents, popupWin;
    printContents = document.getElementById('print-section');
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Print tab</title>
          <style>
          //........Customized style.......
          </style>
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
  }
}



