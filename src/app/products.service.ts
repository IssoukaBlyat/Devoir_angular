import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  produit = [
    {name: "Asterix", photo: "img1", prix: "prix1", description: "info1"},
    {name: "nom2", photo: "img2", prix: "prix2", description: "info2"},
    {name: "nom3", photo: "img3", prix: "prix3", description: "info3"},
    {name: "nom4", photo: "img4", prix: "prix4", description: "info4"}
  ]
}
