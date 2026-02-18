import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from '../../models/cartItem';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  @Input() items: CartItem[] = [];

  @Output() toggleCart = new EventEmitter<Boolean>();
  openCart() {
    console.log('Toggling cart view');
    this.toggleCart.emit(true);
  }

}
