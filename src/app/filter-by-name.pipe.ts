import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName',
  standalone: true
})
export class FilterByNamePipe implements PipeTransform {

  transform(produit: any[]): any [] {
    return produit.sort((a:any,b:any) => {
      if(a.name < b.name) { return -1;}
      else if(a.name > b.name) { return 1;}
      else return 0
    });
  }

}
