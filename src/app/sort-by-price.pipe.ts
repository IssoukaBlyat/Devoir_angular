import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash'; 

@Pipe({
  name: 'sortByPrice',
  standalone: true
})
export class SortByPricePipe implements PipeTransform {

  transform(value: boolean , array: any, arg2: any): any[] {
    console.log(this);
    if(this.boolean==true) {
      return orderBy(array, "cost", 'asc');;
    }else{
      return orderBy(array, "cost", 'desc');;
    }
  }

}
