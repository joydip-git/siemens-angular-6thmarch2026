import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { ProductStorageService } from '../../services/product-storage-service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-edit-product',
  imports: [],
  templateUrl: './edit-product.html',
  styleUrl: './edit-product.css',
})
export class EditProduct implements OnInit {
  private psSvc: ProductStorageService;
  productInfo: WritableSignal<Product | undefined> = signal(undefined)

  constructor() {
    this.psSvc = inject(ProductStorageService)
  }
  ngOnInit(): void {
    const p = this.psSvc.getProduct()
    this.productInfo.set(p)
    console.log(p?.productName)
  }
}
