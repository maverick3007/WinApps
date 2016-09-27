import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  userName;
  loggedIn: boolean = false;
  constructor(private _authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.loggedIn = this._authenticationService.isLoggedIn();
        this.getUserName();
  }

  getUserName(){
    this._authenticationService.getUser()
    .subscribe(userName => this.userName = userName.email,
    error => this.userName = ""
    )
  }

  logout(){
    this._authenticationService.logout();
  }

}
