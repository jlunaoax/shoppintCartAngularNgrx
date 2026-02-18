import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { CartItem } from '../../models/cartItem';
// import { ProductService } from '../../services/product.service';
// import { Navbar } from '../navbar/navbar';
import { NavbarV2 } from '../navbar-v2/navbar-v2';
// import { Catalog } from '../catalog/catalog';
import { RouterOutlet, Router } from '@angular/router';
import { SharingDataService } from '../../services/sharing-data.service';
import Swal from 'sweetalert2';
import { Store } from '@ngrx/store';
import { ItemsState } from '../../store/items.reducer';
import { add, remove, total } from '../../store/items.actions';

@Component({
  selector: 'cart-app-v2',
  imports: [NavbarV2, RouterOutlet],
  templateUrl: './cart-app.component-v2.html',
  styleUrl: './cart-app.component-v2.css',
})
export class CartAppComponentV2 implements OnInit {

  items: CartItem[] = [];
  totalAmount: number = 0;
  totalQuantity: number = 0;
  
  constructor(
    private store: Store<{ items: ItemsState }>,
    private router: Router,
    private sharingDataService: SharingDataService) {
      this.store.select('items').subscribe(itemsState => {
        this.items = itemsState.items;
        this.totalAmount = itemsState.totalAmount || 0;
        this.totalQuantity = itemsState.totalQuantity || 0;
      });
     }

  ngOnInit() {
    console.log('CartApp initialized');
    //this.restoreItemsFromLocalStorage();
    this.store.dispatch(total());
    this.removeFromCart();
    this.addToCart();
  }

  addToCart() {
    this.sharingDataService.productEventEmmitter.subscribe((product: Product) => {
        console.log('Adding to cart:', product);
        this.store.dispatch(add({ product }));
        this.store.dispatch(total());
        this.saveItemsToLocalStorage(this.items);
        /* const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
          existingItem.quantity += 1;
          this.saveItemsToLocalStorage(this.items);
          return;
        }
        this.items.push({ product: product, quantity: 1 });
        this.saveItemsToLocalStorage(this.items); */
        this.router.navigate(['/cart']);

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Product added to cart',
          showConfirmButton: true,
          timer: 1000
        });
    });
  }

  removeFromCart() {
    console.log('Setting up removeFromCart subscription');
    this.sharingDataService.idProductEventEmitter.subscribe((product: Product) => {

      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          console.log('Received product to remove:', product);
          //this.items = this.items.filter(item => item.product.id !== product.id);
          this.store.dispatch(remove({ id: product.id }));
          this.store.dispatch(total());
          console.log('Updated cart items:', this.items);
          if (this.items.length === 0) {
            sessionStorage.removeItem('cartItems');
            sessionStorage.clear();
          }
          this.saveItemsToLocalStorage(this.items);

          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/cart']);
          });
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });
    });
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

}
