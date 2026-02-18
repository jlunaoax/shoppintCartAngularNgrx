import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { products } from '../data/product.data';
import { Observable, of, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  constructor() {}

  getProducts(): Observable<Product[]> {
    // This method would typically fetch products from an API or database
    console.log(`Fetching products... ${JSON.stringify(products)}`);
    return of(products);
  }

  getProductById(id: number): Observable<Product | undefined> {
    return this.getProducts().pipe(
      map((products) => products.find((p) => p.id === id))
    );
  }

  addProduct(product: Product): void {
    // This method would typically send a request to an API to add a new product
    console.log('Product added:', product);
  }

  updateProduct(product: Product): void {
    // This method would typically send a request to an API to update an existing product
    console.log('Product updated:', product);
  }
  
}
