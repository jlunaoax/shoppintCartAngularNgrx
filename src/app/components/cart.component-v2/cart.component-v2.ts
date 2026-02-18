import { Component } from '@angular/core';
import { CartItem } from '../../models/cartItem';
import { Product } from '../../models/product';
import { CurrencyPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharingDataService } from '../../services/sharing-data.service';
import { ItemsState } from '../../store/items.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-cart.component-v2',
  imports: [CurrencyPipe, RouterModule],
  templateUrl: './cart.component-v2.html',
  styleUrl: './cart.component-v2.css',
})
export class CartComponentV2 {
  items: CartItem[] = [];

  constructor(private sharingDataService: SharingDataService, private store: Store<{ items: ItemsState }>) {
    this.store.select('items').subscribe(itemsState => {
      this.items = itemsState.items;
      console.log('CartComponentV2 initialized with items:', this.items);
    });
  }

  get total() {
    return this.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }

  removeFromCart(product: Product) {
    console.log('Removing from cart:', product);
    this.sharingDataService.idProductEventEmitter.emit(product);
  }
}
