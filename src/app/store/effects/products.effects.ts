import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {  catchError, EMPTY, exhaustMap, map } from "rxjs";
import { ProductService } from "../../services/product.service";
import { findAllProducts, loadProducts } from "../products.actions";

@Injectable()
export class ProductsEffects {
  private actions$ = inject(Actions);
  private productService = inject(ProductService);

  loadProduct$ = createEffect(
    () => this.actions$.pipe(
      ofType(loadProducts),
      exhaustMap(() =>
        this.productService.getProducts()))
        .pipe(
          map(products => (findAllProducts({ products }))),
          catchError(() => EMPTY)
        )
  );

}   

/*

*/