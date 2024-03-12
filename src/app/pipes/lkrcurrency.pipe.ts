import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'lKRCurrency'
})
export class LKRCurrencyPipe implements PipeTransform {

  transform(value: any,digits:string='1.2-2') {
    if(value==null)return null;

    let data= new Intl.NumberFormat('en-LK', {
      style: 'currency',
      currency: 'LKR',
      minimumFractionDigits: parseInt(digits.split('-')[1], 10),
      maximumFractionDigits: parseInt(digits.split('-')[1], 10)
    }).format(Number(value));
    return data;
  }

}
