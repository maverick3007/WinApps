import { Component, OnInit } from '@angular/core';
import { Router, CanActivate} from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, CanActivate {

  constructor(private _authenticationService: AuthenticationService, private _router: Router) { }

  canActivate() {
      if(this._authenticationService.isLoggedIn()){
        return true;
      }
      this._router.navigate(['']);
      return false;
    }

  ngOnInit() {
  }

} 
