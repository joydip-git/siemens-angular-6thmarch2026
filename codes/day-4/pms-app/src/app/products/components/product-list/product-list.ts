import { Component, Inject, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
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
export class ProductList implements OnChanges, OnInit, OnDestroy {
  //products: readonly Product[] | undefined;
  products?: readonly Product[];
  isLoadingOver = false
  errorMessage = ''
  filterText = ''

  constructor(@Inject(SERVICE_TOKEN) private productSvc: IServiceContract<Product>) {
  }
  ngOnChanges(changes: SimpleChanges): void {

  }
  ngOnInit(): void {
    console.log('init');
    try {
      this.products = this.productSvc.getAll()
      this.isLoadingOver = true
      this.errorMessage = ''
    } catch (error: any) {
      this.products = undefined
      this.isLoadingOver = true
      this.errorMessage = error.message
    }
  }
  ngOnDestroy(): void {
  }
}
