import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebshopService } from '../../services/webshop.service'

@Component({
  selector: 'app-webshop',
  templateUrl: './webshop.component.html',
  styleUrls: ['./webshop.component.css'],
})
export class WebshopComponent implements OnInit {

  constructor(private _webshopservice:  WebshopService) { }

  headers = [];

    ngOnInit() {
    this.getWebshopStatus();
  }

  getWebshopStatus(){
    this._webshopservice.getOrderHeaders()
    .subscribe(headers => {this.headers = headers;this.sortOnDate();});
    
  }

  sortOnDate(){
    this.headers.sort(function(a,b){
      return (a.OrderDate - b.OrderDate);
    });
  }

}
