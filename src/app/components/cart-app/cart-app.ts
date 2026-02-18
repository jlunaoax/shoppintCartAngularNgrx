import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { CurrencyPipe } from '@angular/common';
import { Catalog } from '../catalog/catalog';
import { CartComponent } from '../cart.component/cart.component';
import { CartItem } from '../../models/cartItem';
import { Navbar } from '../navbar/navbar';
import { CartModal } from '../cart-modal/cart-modal';

@Component({
  selector: 'app-cart-app',
  imports: [ Catalog, CartModal, Navbar],
  templateUrl: './cart-app.html',
  styleUrl: './cart-app.css',
})
export class CartApp implements OnInit {
  products: Product[] = [];
  items: CartItem[] = [];

  showCart: boolean = false;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    console.log('CartApp initialized');
    //this.products = this.productService.getProducts();
    this.restoreItemsFromLocalStorage();
  }

  addToCart(product: Product) {
    console.log('Adding to cart:', product);
    const existingItem = this.items.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
      this.saveItemsToLocalStorage(this.items);
      return;
    }
    this.items.push({ product: product, quantity: 1 });
    this.saveItemsToLocalStorage(this.items);
  }

  removeFromCart(product: Product) {
    const index = this.items.findIndex(item => item.product.id === product.id);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
    this.saveItemsToLocalStorage(this.items);
  }

  saveItemsToLocalStorage(items: CartItem[]) {
    sessionStorage.setItem('cartItems', JSON.stringify(items));
  }

  restoreItemsFromLocalStorage() {
    const itemsJson = sessionStorage.getItem('cartItems');
    if (itemsJson) {
      this.items = JSON.parse(itemsJson);
    }
  }

  clearCart() {
    this.items = [];
    sessionStorage.removeItem('cartItems');
  }

  openCart(): void {
    this.showCart = !this.showCart;
  }

}
