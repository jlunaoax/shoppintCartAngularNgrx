import { Component, Input } from '@angular/core';
import { CartItem } from '../../models/cartItem';
import { RouterModule } from '@angular/router';
import { Product } from '../../models/product';

@Component({
  selector: 'navbar-v2',
  imports: [RouterModule],
  templateUrl: './navbar-v2.html',
  styleUrl: './navbar-v2.css',
})
export class NavbarV2 {
  @Input() items: CartItem[] = [];
}
