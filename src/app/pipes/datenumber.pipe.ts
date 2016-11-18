import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datenumber'
})
export class DatenumberPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    var stringdate = "N/A";
    if(value && !isNaN(value) )
    {
      stringdate = String(value);
      stringdate = stringdate.slice(6,8) + "/" + stringdate.slice(4,6)+ "/" + stringdate.slice(0,4);
    }

    return stringdate;
  }

}
