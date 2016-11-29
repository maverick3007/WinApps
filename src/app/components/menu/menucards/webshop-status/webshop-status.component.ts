import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { WebshopService } from '../../../../services/webshop.service'

@Component({
  selector: 'app-webshop-status',
  templateUrl: './webshop-status.component.html',
  styleUrls: ['./webshop-status.component.css']
})
export class WebshopStatusComponent implements OnInit {

  constructor(private _webshopservice: WebshopService, private _router: Router) { }
  webshopStatus =  { "Neworders": 0, "OrderAmount":0, "NewCustomers":0 };
  ngOnInit() {
    this.getWebshopStatus();
  }

  getWebshopStatus(){
    this._webshopservice.getWebShopStatus()
    .subscribe(webshopStatus => this.webshopStatus = webshopStatus)
  }

  gotoWebshop(){
    this._router.navigate(['/webshop/orders']);
  }

}
