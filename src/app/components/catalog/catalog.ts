import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../../models/product';

@Component({
  selector: 'app-catalog',
  imports: [ProductCard],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css',
})
export class Catalog {
  @Input() products!: Product[];

  @Output() addToCartEmmitter = new EventEmitter<Product>();
  addToCart(product: Product) {
    this.addToCartEmmitter.emit(product);
  }
}
