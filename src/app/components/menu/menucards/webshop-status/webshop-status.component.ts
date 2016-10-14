import { Component, OnInit } from '@angular/core';
import { WebshopService } from '../../../../services/webshop.service'

@Component({
  selector: 'app-webshop-status',
  templateUrl: './webshop-status.component.html',
  styleUrls: ['./webshop-status.component.css']
})
export class WebshopStatusComponent implements OnInit {

  constructor(private _webshopservice: WebshopService) { }
  webshopStatus =  { "Neworders": 0, "OrderAmount":0, "NewCustomers":0 };
  ngOnInit() {
    this.getWebshopStatus();
  }

  getWebshopStatus(){
    this._webshopservice.getWebShopStatus()
    .subscribe(webshopStatus => this.webshopStatus = webshopStatus)
  }

}
