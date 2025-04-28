import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { ProductsService } from '../products.service'; 
import { FilterByNamePipe } from '../filter-by-name.pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, NgFor, FilterByNamePipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  produits: any[] = [];
  constructor(private produitsService: ProductsService) {}

  ngOnInit(): void {
    this.produits = this.produitsService.produits
  }
}
