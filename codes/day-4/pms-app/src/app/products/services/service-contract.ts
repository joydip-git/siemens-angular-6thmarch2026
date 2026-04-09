import { Observable } from "rxjs";
import { ApiResponse } from "../../shared/models/api-response";
import { Product } from "../models/product";

export interface IServiceContract<T> {
    //getAll(): Readonly<T[]>;
    //getAll(): readonly T[];
    getAll(): Observable<ApiResponse<T[]>>;
    get(id: number): Observable<ApiResponse<T>>;
}