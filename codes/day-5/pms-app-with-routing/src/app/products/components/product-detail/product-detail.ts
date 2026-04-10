import { Component, Inject, inject, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Params, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { IServiceContract } from '../../services/service-contract';
import { Product } from '../../models/product';
import { SERVICE_TOKEN } from '../../../config/constants';
import { ApiResponse } from '../../../shared/models/api-response';
import { ProductStorageService } from '../../services/product-storage-service';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail implements OnInit, OnDestroy {

  private router: Router;
  private currentRoute: ActivatedRoute;
  private sub?: Subscription;

  product: WritableSignal<Product | undefined> = signal(undefined)
  isRequestOver = signal(false)
  errorMessage = signal('')

  constructor(@Inject(SERVICE_TOKEN) private productSvc: IServiceContract<Product>, private psSvc: ProductStorageService) {
    this.router = inject(Router)
    this.currentRoute = inject(ActivatedRoute)
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }
  ngOnInit(): void {
    // const paramsObservable: Observable<Params> = this.currentRoute.params;
    // this.sub = paramsObservable.subscribe({
    //   next: (params) => {
    //     const id = Number(params["id"])
    //   },
    //   error: (err) => {

    //   }
    // })
    const snapshot: ActivatedRouteSnapshot = this.currentRoute.snapshot
    const id = Number(snapshot.params["id"])
    const obs: Observable<ApiResponse<Product>> = this.productSvc.get(id);
    this.sub = obs.subscribe({
      next: (response) => {
        if (response.data !== null) {
          this.product.set(response.data)
          this.errorMessage.set('')
          this.isRequestOver.set(true)
        } else {
          this.product.set(undefined)
          this.errorMessage.set(response.message)
          this.isRequestOver.set(true)
        }
      },
      error: (err: any) => {
        this.product.set(undefined)
        this.errorMessage.set(err.message)
        this.isRequestOver.set(true)
      },
      complete: () => {
        this.psSvc.saveProduct(this.product())
      }
    })
  }
  goto() {
    this.router.navigate(['/products', 'edit'])
  }
}
