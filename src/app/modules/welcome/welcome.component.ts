import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service'
import { ModalComponent } from 'ng2-bs4-modal/ng2-bs4-modal';
import { Router } from '@angular/router';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {
  @ViewChild('modal')
    modal: ModalComponent;

  cred : {
    userName: string;
    passWord: string;
    remember: boolean;
  } = {userName : "", passWord:"", remember:true}

  constructor(private _authenticationService: AuthenticationService, private _router:Router) { }

  ngOnInit() {
    if(this._authenticationService.isLoggedIn()){
      this._router.navigate(['/menu']);
    }

    if(!!localStorage.getItem('cred')){
      this.cred = JSON.parse(localStorage.getItem('cred'))
    };
  }

  onSubmit() {
    if (this.cred.remember){
      localStorage.setItem('cred', JSON.stringify(this.cred));
    }else{
      localStorage.removeItem('cred');
    }
    
    this._authenticationService.login(this.cred.userName, this.cred.passWord).subscribe(
      response => {
        this._router.navigate(['/menu']);
    },
    error => {
        this.modal.open();
    },
    () => { 
      console.log('authentication done'); 
    });
  }

}
