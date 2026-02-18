import { Injectable, EventEmitter } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class SharingDataService {
  private _idProductEventEmitter: EventEmitter<Product> = new EventEmitter<Product>();

  private _productEventEmmitter: EventEmitter<Product> = new EventEmitter<Product>();

  get productEventEmmitter() : EventEmitter<Product> {
    return this._productEventEmmitter;
  }

  get idProductEventEmitter() : EventEmitter<Product> {
    return this._idProductEventEmitter;
  }
}
