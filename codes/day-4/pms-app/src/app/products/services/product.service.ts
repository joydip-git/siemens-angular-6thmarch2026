import { HttpClient } from "@angular/common/http";
import { productRecords } from "../data/product-records";
import { Product } from "../models/product";
import { IServiceContract } from "./service-contract";
import { inject } from "@angular/core";
import { PRODUCT_API_URL } from "../../config/constants";

export class ProductService implements IServiceContract<Product> {
    private http: HttpClient;
    constructor() {
        this.http = inject(HttpClient)
    }
    getAll(): readonly Product[] {
        //this.http.get<model>(PRODUCT_API_URL)
        return productRecords as Readonly<Product[]>
    }

}