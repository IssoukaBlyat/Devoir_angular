import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByUnprice',
  standalone: true
})
export class SortByUnpricePipe implements PipeTransform {

  transform(produit: any[]): any [] {
    return produit.sort((a:any,b:any) => {
      if(a.prix > b.prix) { return -1;}
      else if(a.prix < b.prix) { return 1;}
      else return 0
    });
  }

}
