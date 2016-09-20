import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service'
import { ModalComponent } from 'ng2-bs4-modal/ng2-bs4-modal';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {
  cred : {
    userName: string;
    passWord: string;
    remember: boolean;
  } = {userName : "", passWord:"", remember:true}

  constructor(private _authenticationService: AuthenticationService) { }

  ngOnInit() {
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
      response => {alert("logged in!");
    },
    error => {
        alert("Error!");
    },
    () => { 
      console.log('authentication done'); 
    });
  }

}
