import {Injectable} from '@angular/core';

@Injectable()
export class Constants{
  root_dir: string;

  constructor(){
      this.root_dir = 'http://anka-app.azurewebsites.net/'
    }
  }