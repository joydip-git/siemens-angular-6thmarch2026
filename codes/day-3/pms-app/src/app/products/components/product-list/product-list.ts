import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products: readonly Product[];
  //products: Readonly<Product[]>;
  productSvc: ProductService;

  constructor() {
    this.productSvc = new ProductService()
    this.products = this.productSvc.getAll()
  }
}
