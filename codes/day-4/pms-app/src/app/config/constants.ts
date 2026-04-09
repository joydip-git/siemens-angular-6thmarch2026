import { Provider } from "@angular/core"
import { ProductService } from "../products/services/product.service"

export const PRODUCT_API_URL = 'http://localhost:3000/products'

export const SERVICE_TOKEN = 'SERVICE_TOKEN'
export const SERVICE_TYPE = ProductService

export const provideProductService = (): Provider => {
    return {
        provide: SERVICE_TOKEN,
        useClass: SERVICE_TYPE
    }
}