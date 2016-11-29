import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router'
import { WebshopService } from '../../../services/webshop.service';

@Component({
  selector: 'app-webshop-orderheaders',
  templateUrl: './webshop-orderheaders.component.html',
  styleUrls: ['./webshop-orderheaders.component.css']
})
export class WebshopOrderheadersComponent implements OnInit {

  constructor(private _router: Router, private _webshopservice:  WebshopService) { }

  headers = [];
  sortDateOrder = 1;

    ngOnInit() {
    this.getWebshopStatus();
  }

  getWebshopStatus(){
    this._webshopservice.getOrderHeaders()
    .subscribe(headers => {this.headers = headers;this.sortOnDate();});
    
  }

  sortOnDate(){
    this.sortDateOrder = (-1)*this.sortDateOrder;
    var order = this.sortDateOrder;
    this.headers.sort(function(a,b){
      return (order*(a.OrderDate - b.OrderDate));
    });
  }

  selectOrder(header){
      this._router.navigate(['/webshop/order' ,  header.OrderDate + "_" + header.Id]);
  }

}
