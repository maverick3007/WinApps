import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers } from '@angular/http';


@Injectable()
export class AuthenticationService {
  private loggedIn = false;
  
  constructor(private _http: Http) {
    this.loggedIn = !!localStorage.getItem('auth_token');
   }

       login(username: String, password: String) {

        let creds =  "grant_type=password&username=" + username + "&password=" + password ;
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');


        return this._http.post('http://api-mercurio.azurewebsites.net/Token', creds, {
            headers: headers
        }).map(this.extractData).catch(this.handleError)      
    }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

    private extractData(res: Response) {
        let body = res.json();
        localStorage.setItem('auth_token', body);
        this.loggedIn = true;
    }

  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }

}
