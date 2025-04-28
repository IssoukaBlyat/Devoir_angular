import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  produits = [
    {name: "Asterix", description: "desc1", prix: "8.99$", photo: "/public/asterix.jpg"},
    {name: "Obelix", description: "desc2", prix: "9.99$", photo: "/public/obelix.jpg"},
    {name: "César", description: "desc3", prix: "5.99$", photo: "/public/cesar.jpg"},
    {name: "Panoramix", description: "desc4", prix: "6.99$", photo: "/public/panoramix.jpg"}
  ]

  constructor() {}
}
