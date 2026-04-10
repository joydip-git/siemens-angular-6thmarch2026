import { Component, Inject, OnChanges, OnDestroy, OnInit, signal, SimpleChanges, WritableSignal } from '@angular/core';
import { Product } from '../../models/product';
import { FormsModule } from '@angular/forms';
import { ProductFilterPipe } from '../../pipes/product-filter-pipe';
import { SERVICE_TOKEN } from '../../../config/constants';
import { IServiceContract } from '../../services/service-contract';
import { Subscription } from 'rxjs';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-product-list',
  imports: [FormsModule, ProductFilterPipe, RouterLink],
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
  private getSub?: Subscription;

  constructor(@Inject(SERVICE_TOKEN) private productSvc: IServiceContract<Product>) {
  }
  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit(): void {
    //this.getDataUsingPromise()
    this.getDataUsingObservable()
  }
  ngOnDestroy(): void {
    this.getSub?.unsubscribe()
  }

  async getDataUsingPromise() {
    try {
      const apiResponse = await this.productSvc.fetchAll()
      if (apiResponse.data !== null) {
        this.products.set(apiResponse.data)
        this.errorMessage.set('')
        this.isLoadingOver.set(true)
      } else {
        this.products.set([])
        this.errorMessage.set(apiResponse.message)
        this.isLoadingOver.set(true)
      }
    } catch (error: any) {
      this.products.set([])
      this.errorMessage.set(error.message)
      this.isLoadingOver.set(true)
    }
  }

  getDataUsingObservable() {
    this.getSub = this.productSvc
      .getAll()
      .subscribe({
        next: (apiResponse) => {
          if (apiResponse.data !== null) {
            this.products.set(apiResponse.data)
            this.errorMessage.set('')
            this.isLoadingOver.set(true)
          } else {
            this.products.set([])
            this.errorMessage.set(apiResponse.message)
            this.isLoadingOver.set(true)
          }
        },
        error: (err: any) => {
          this.products.set([])
          this.errorMessage.set(err.message)
          this.isLoadingOver.set(true)
        }
      })
  }
}
