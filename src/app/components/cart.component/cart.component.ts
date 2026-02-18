import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from '../../models/cartItem';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../../models/product';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  @Input() items: CartItem[] = [];

  @Output() deletedProduct = new EventEmitter<Product>();

  @Output() closedCartEmitter = new EventEmitter<void>();
  hideCart() {
    console.log('Hiding cart view');
    this.closedCartEmitter.emit(); 
  }

  get total() {
    return this.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }

  removeFromCart(product: Product) {
    this.deletedProduct.emit(product); 
  }
}
