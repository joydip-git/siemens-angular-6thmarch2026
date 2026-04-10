import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductStorageService {
  private productStore = signal<Product | undefined>(undefined)

  saveProduct(p: Product | undefined): void {
    this.productStore.set(p);
  }

  getProduct(): Product | undefined {
    return this.productStore()
  }
}
