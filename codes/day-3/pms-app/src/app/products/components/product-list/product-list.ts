import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { FormsModule } from '@angular/forms';
import { ProductFilterPipe } from '../../pipes/product-filter-pipe';

@Component({
  selector: 'app-product-list',
  imports: [FormsModule, ProductFilterPipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products: readonly Product[];
  //products: Readonly<Product[]>;
  productSvc: ProductService;
  filterText = ''

  constructor() {
    this.productSvc = new ProductService()
    this.products = this.productSvc.getAll()
  }
}
