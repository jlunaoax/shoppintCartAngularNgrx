import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() product!: Product;

  @Output() addToCartEmmitter = new EventEmitter<Product>();
  addToCart(product: Product) {
    this.addToCartEmmitter.emit(product);
  }
}
