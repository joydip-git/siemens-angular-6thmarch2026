import { productRecords } from "../data/product-records";
import { Product } from "../models/product";
import { IServiceContract } from "./service-contract";

export class ProductService implements IServiceContract<Product> {
    getAll(): readonly Product[] {
        return productRecords as Readonly<Product[]>
    }

}