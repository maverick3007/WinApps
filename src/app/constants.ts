import {Injectable} from 'angular2/core';

@Injectable()
export class Constants{
  root_dir: string;

  constructor(){
      this.root_dir = 'http://anka-app.azurewebsites.net/'
    }
  }