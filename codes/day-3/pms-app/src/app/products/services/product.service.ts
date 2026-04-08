import { productRecords } from "../data/product-records";
import { Product } from "../models/product";

export class ProductService {
    getAll(): Readonly<Product[]> {
        return productRecords as Readonly<Product[]>
    }
}