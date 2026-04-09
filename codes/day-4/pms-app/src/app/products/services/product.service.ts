import { HttpClient } from "@angular/common/http";
import { productRecords } from "../data/product-records";
import { Product } from "../models/product";
import { IServiceContract } from "./service-contract";
import { inject } from "@angular/core";
import { PRODUCT_API_URL } from "../../config/constants";
import { ApiResponse } from "../../shared/models/api-response";
import { Observable } from "rxjs";

export class ProductService implements IServiceContract<Product> {

    private http: HttpClient;
    constructor() {
        this.http = inject(HttpClient)
    }
    
    get(id: number): Observable<ApiResponse<Product>> {
        return this.http.get<ApiResponse<Product>>(`${PRODUCT_API_URL}/${id}`)
    }

    getAll(): Observable<ApiResponse<Product[]>> {
        return this.http.get<ApiResponse<Product[]>>(PRODUCT_API_URL)
    }

}