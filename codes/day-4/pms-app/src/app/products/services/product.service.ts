import { HttpClient } from "@angular/common/http";
import { Product } from "../models/product";
import { IServiceContract } from "./service-contract";
import { inject, Injectable } from "@angular/core";
import { PRODUCT_API_URL } from "../../config/constants";
import { ApiResponse } from "../../shared/models/api-response";
import { Observable } from "rxjs";

//@Injectable({providedIn:'root'})
//@Injectable()
export class ProductService implements IServiceContract<Product> {

    private http: HttpClient;
    constructor() {
        this.http = inject(HttpClient)
    }
    // constructor(http: HttpClient) {
    //     this.http = http;
    // }
    async fetchAll(): Promise<ApiResponse<Product[]>> {
        try {
            const response = await fetch(PRODUCT_API_URL)
            const records = (await response.json()) as ApiResponse<Product[]>;
            return records
        } catch (error) {
            throw error
        }
    }

    get(id: number): Observable<ApiResponse<Product>> {
        return this.http.get<ApiResponse<Product>>(`${PRODUCT_API_URL}/${id}`)
    }

    getAll(): Observable<ApiResponse<Product[]>> {
        return this.http.get<ApiResponse<Product[]>>(PRODUCT_API_URL)
    }
}