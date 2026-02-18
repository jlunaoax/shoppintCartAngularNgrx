import { createReducer, on } from '@ngrx/store';
import { findAllProducts, loadProducts } from './products.actions';


const products: any[] = [];

const initialState = {
  products
};

export const productsReducer = createReducer(
    initialState,
    on(loadProducts, (state) => ({ products: [...state.products] })),
    on(findAllProducts, (state, { products }) => ({ products: [...products] }))
);