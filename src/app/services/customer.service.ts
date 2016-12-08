import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers } from '@angular/http';

import { ConstantsService } from './constants.service';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class CustomerService {

  constructor(private _http: Http, private _const: ConstantsService) { }

  public search(name: string) {
    let authToken = localStorage.getItem('auth_token');

    let headers = new Headers();
    headers.append('Authorization', `Bearer ${authToken}`);

    return this._http.get(this._const.root_url + 'api/customer?name=' + name, { headers: headers })
      .map(this.extractData)
      .catch(this.handleError);
  }

  public getCustomer(id: string) {
    let authToken = localStorage.getItem('auth_token');

    let headers = new Headers();
    headers.append('Authorization', `Bearer ${authToken}`);

    return this._http.get(this._const.root_url + 'api/customer/' + id, { headers: headers })
      .map(this.extractData)
      .catch(this.handleError);
  }

  public getCustomerDocuments(custId:string, type: string, items: number, page: number){
    let headers = this.GenSecHeader();
    return  this._http.get(this._const.root_url + 'api/customer/' + custId + '/documents?', { headers: headers })
    .map(this.extractData)
    .catch(this.handleError);
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message

    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    alert('Er is een fout opgetreden: ' + errMsg);
    return Observable.throw(errMsg);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private GenSecHeader(){
        let authToken = localStorage.getItem('auth_token');

    let headers = new Headers();
    headers.append('Authorization', `Bearer ${authToken}`);

    return headers
  }

}
