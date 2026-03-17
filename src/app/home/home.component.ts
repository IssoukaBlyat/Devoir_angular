import { Component, OnInit } from '@angular/core';
import { FormsModule, FormControl, ReactiveFormsModule} from '@angular/forms';
import { NgFor } from '@angular/common';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { ProductsService } from '../products.service'; 
import { FilterByNamePipe } from '../filter-by-name.pipe';
import { SortByPricePipe } from '../sort-by-price.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, NgFor, FilterByNamePipe, SortByPricePipe, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  produits: any[] = [];
  price: boolean[] = [];
  constructor(private produitsService: ProductsService) {}
  filterResult(text: string) {
    if (!text) {
      this.produits 
      return;
    }

    this.produits = this.produits.filter(produit => produit?.name.includes(text));
  }

  ngOnInit(): void {
    this.produits = this.produitsService.produits
  }
}
