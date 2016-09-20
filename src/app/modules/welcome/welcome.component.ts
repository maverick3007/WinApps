import { Component, OnInit } from '@angular/core';


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

  constructor() { }

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
    
    alert("yoho!");
  }

}
