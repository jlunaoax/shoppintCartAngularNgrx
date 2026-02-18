import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartComponent } from '../cart.component/cart.component';
import { CartItem } from '../../models/cartItem';
import { Product } from '../../models/product';

@Component({
  selector: 'app-cart-modal',
  imports: [CartComponent],
  templateUrl: './cart-modal.html',
  styleUrl: './cart-modal.css',
})
export class CartModal {
  @Input() items: CartItem[] = [];

  @Output() deletedProduct = new EventEmitter<Product>();

  @Output() closedCartEmitter = new EventEmitter<void>();
  hideCart() {
    console.log('Hiding cart view');
    this.closedCartEmitter.emit(); 
  }

  @Output() removedProductEmitter = new EventEmitter<Product>();
  removeFromCart(product: Product) {
    this.removedProductEmitter.emit(product); 
  }

}
