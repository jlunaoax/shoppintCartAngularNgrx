import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartAppComponentV2 } from './components/cart-app.component-v2/cart-app.component-v2';
// import { CartApp } from './components/cart-app/cart-app';

@Component({
  selector: 'app-root',
  imports: [CartAppComponentV2],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('3-cart-app');
}
