import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {CustomerService} from '../../../services/customer.service'

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  custId: string = "";

  docTypes = [{id:"100", prefix:"UO", name:"Offertes", page: 1, docs:[]}, 
  {id:"200", prefix:"UB", name:"Bestellingen", page: 1, docs:[]},
  {id:"300", prefix:"UP", name:"Pick-ups", page: 1, docs:[]},
  {id:"400", prefix:"UL", name:"Leveringen", page: 1, docs:[]},
  {id:"500", prefix:"TR", name:"Kassaverkopen", page: 1, docs:[]},
  {id:"600", prefix:"UF", name:"Facturen", page: 1, docs:[]},
  ];

  custDetails = {"Id":"","Name":"","Address":"","PostalCode":"","City":"","Type":"","Email":"","Tel1":"","Tel2":"","VAT":"","Country":""};
  constructor(private _route: ActivatedRoute, private _customerservice: CustomerService) {
    _route.params.subscribe(
        params =>{
            this.custId = decodeURI(params['id']);
            this._customerservice.getCustomer(encodeURI(this.custId)).subscribe(cust => this.custDetails = cust);          
        }
    );
   }

  ngOnInit() {
    this.loadAllDocs();
  }

  loadDocs(docType){
    this._customerservice.getCustomerDocuments(this.custId, docType.prefix, 25, docType.page)
    .subscribe(result => docType.docs = result.Documents)
  }

  loadAllDocs(){
    for(let type of this.docTypes){
      this.loadDocs(type);
    }
  }



}
