import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPrice',
  standalone: true
})
export class SortByPricePipe implements PipeTransform {

  transform(produit: any[]): any [] {
    console.log(produit);
    return produit.sort((a:any,b:any) => {
      if(a.prix < b.prix) { return -1;}
      else if(a.prix > b.prix) { return 1;}
      else return 0
    });
  }

}
