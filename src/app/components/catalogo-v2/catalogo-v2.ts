import { Component, OnInit } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../../models/product';
import { Store } from '@ngrx/store';
import { SharingDataService } from '../../services/sharing-data.service';
import { loadProducts } from '../../store/products.actions';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'catalogo-v2',
  imports: [ProductCard],
  templateUrl: './catalogo-v2.html',
  styleUrl: './catalogo-v2.css',
})
export class CatalogoV2 implements OnInit {
  products!: Product[];

  constructor(
    private store: Store<{products: any}>,
    private sharingDataService: SharingDataService,
    // private productService: ProductService
  ) {
    this.store.select('products').subscribe((state) => {
      this.products = state.products;
    });
  }

  ngOnInit() {
    this.store.dispatch(loadProducts());
    // Additional initialization logic can go here
    // this.products = this.productService.getProducts();
  }

  addToCart(product: Product) {
    this.sharingDataService.productEventEmmitter.emit(product);
  }
}
