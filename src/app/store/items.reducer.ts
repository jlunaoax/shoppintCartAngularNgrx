import { createReducer, on } from '@ngrx/store';
import { add, remove, total } from './items.actions';
import { Product } from '../models/product';

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface ItemsState {
  items: CartItem[];
  totalQuantity: number;
  totalAmount?: number;
}

export const initialState: ItemsState = {
  items: JSON.parse(localStorage.getItem('cartItems') || '[]'),
  totalQuantity: 0,
  totalAmount: 0
};

export const itemsReducer = createReducer(
  initialState,
  on(add, (state, { product }) => {
    const existingItem = state.items.find(item => item.product.id === product.id);
    if (existingItem) {
      const updatedItems = state.items.map(item =>
        item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      return { ...state, items: updatedItems };
    }
    return { ...state, items: [...state.items, { product, quantity: 1 }] };
  }),
  on(remove, (state, { id }) => {
    const updatedItems = state.items.filter(item => item.product.id !== id);
    return { ...state, items: updatedItems };
  }),
  on(total, (state) => {
    const totalAmount = state.items.reduce((sum, item) => sum + item.quantity * item.product.price, 0);
    const totalQuantity = state.items.reduce((sum, item) => sum + item.quantity, 0);
    return { ...state, totalAmount, totalQuantity };
  })
);