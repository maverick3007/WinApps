import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service'
import { Router} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  userName;
  loggedIn: boolean = false;
  constructor(private _authenticationService: AuthenticationService, private _router: Router) { }

  ngOnInit() {
    this.loggedIn = this._authenticationService.isLoggedIn();
        this.getUserName();
  }

  getUserName(){
    this._authenticationService.getUser()
    .subscribe(userName => this.userName = userName.Email,
    error => this.userName = ""
    )
  }

  clickLink(link){
    this._router.navigate(['/customers']);
  }

  clickName(){
    alert("To be implemented!");
  }

  clickHome(){
    this._router.navigate(['/menu']);
  }

  logout(){
    this._authenticationService.logout();
  }

}
