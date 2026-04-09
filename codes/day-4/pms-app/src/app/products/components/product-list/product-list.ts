import { Component, Inject, OnChanges, OnDestroy, OnInit, signal, SimpleChanges, WritableSignal } from '@angular/core';
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
  // products?: readonly Product[];
  // isLoadingOver = false
  // errorMessage = ''

  products: WritableSignal<readonly Product[]> = signal([]);
  isLoadingOver = signal(false)
  errorMessage = signal('')

  filterText = ''

  constructor(@Inject(SERVICE_TOKEN) private productSvc: IServiceContract<Product>) {
  }
  ngOnChanges(changes: SimpleChanges): void {

  }
  ngOnInit(): void {
    try {
      console.log('success');
      this.products.set(this.productSvc.getAll())
      this.isLoadingOver.set(true)
      this.errorMessage.set('')
    } catch (error: any) {
      console.log('error');
      this.products.set([])
      this.isLoadingOver.set(true)
      this.errorMessage.set(error.message)
    }
  }

  
  ngOnDestroy(): void {
  }
}
