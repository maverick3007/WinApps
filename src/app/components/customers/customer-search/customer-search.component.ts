import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import {FormControl} from '@angular/forms';
import { CustomerService} from '../../../services/customer.service';

@Component({
  selector: 'app-customer-search',
  templateUrl: './customer-search.component.html',
  styleUrls: ['./customer-search.component.css']
})
export class CustomerSearchComponent implements OnInit {
  searchString = new FormControl();
  customers = [];
  showAndTell = "";
  constructor(private _router: Router, private _customerService: CustomerService) {
    this.searchString.valueChanges
      .debounceTime(700)
      .subscribe(searchString => this._customerService.search(searchString)
      .subscribe(customers => this.customers = customers) );
   }

  ngOnInit() {
  }

  setVal(val){
    this.showAndTell = val;
  }

  selectCustomer(cust){
    this._router.navigate(['/customers/detail' , cust])
  }
}
