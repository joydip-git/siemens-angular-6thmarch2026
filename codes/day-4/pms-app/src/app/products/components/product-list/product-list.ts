import { Component, Inject } from '@angular/core';
import { Product } from '../../models/product';
import { FormsModule } from '@angular/forms';
import { ProductFilterPipe } from '../../pipes/product-filter-pipe';
import { SERVICE_TOKEN } from '../../../config/constants';
import { IServiceContract } from '../../services/service-contract';

@Component({
  selector: 'app-product-list',
  imports: [FormsModule, ProductFilterPipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  //products: readonly Product[] | undefined;
  products?: readonly Product[];
  filterText = ''

  constructor(@Inject(SERVICE_TOKEN) private productSvc: IServiceContract<Product>) {
    // this.products = this.productSvc.getAll()
  }
}
