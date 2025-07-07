import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  produit: any;
  private route = inject(ActivatedRoute);
  produitId: any;
  constructor(private produitsService: ProductsService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.produitId = params.get('id');
    })
    this.produit = this.produitsService.produits.find((element) => element.id == this.produitId)
  }
}
