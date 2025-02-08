import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Product } from "../modules/product.model";
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';


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

    createProduct(product: Product) : Observable<Product> {
        return this.getProducts().pipe(
            map((products: Product[]): Product => {
                const maxId: number = products.reduce((max: number, p: Product): number => Math.max(max, p.id ? +p.id : 0), 0);
                product.id = maxId + 1;
                return product;
            }),
            switchMap((newProduct: Product): Observable<Product> => this.httpClient.post<Product>(`${this.url}/products`, newProduct))
        );
    }

}