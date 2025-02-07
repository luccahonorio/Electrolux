import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Product } from "../modules/product.model";

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    private url = environment.api;

    constructor(private httpClient: HttpClient) {
     }

    getProducts() {
        return this.httpClient.get<Product[]>(this.url + '/products');
    }
}