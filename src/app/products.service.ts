import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  produits = [
    {name: "Asterix", description: "desc1", prix: "8.99$", photo: "/asterix.jpg", id: 1},
    {name: "Obelix", description: "desc2", prix: "9.99$", photo: "/obelix.jpg", id: 2},
    {name: "César", description: "desc3", prix: "5.99$", photo: "/cesar.jpg", id: 3},
    {name: "Panoramix", description: "desc4", prix: "6.99$", photo: "/panoramix.jpg", id: 4}
  ]

  constructor() {}
}
