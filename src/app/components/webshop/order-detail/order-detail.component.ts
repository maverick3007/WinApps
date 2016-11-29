import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { WebshopService } from '../../../services/webshop.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
orderId:string;
order = {orderLine:[]};

  constructor(private route: ActivatedRoute, private _webshopservice:  WebshopService) { 
     route.params.subscribe(
        params =>{
            this.orderId = decodeURI(params['id']);
            this.getOrderDetail(encodeURI(this.orderId));
        }
    );
  }
  
  ngOnInit() {    
  }

  getOrderDetail(id: string){
    this._webshopservice.getOrderDetail(id).subscribe(order => {this.order = order;});

  }

}
