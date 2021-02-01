import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { addProduct, removeProduct } from './cart.actions';

@Injectable()
export class CartService {
  public cart: Observable<Cart>;
  public currentCart: Cart;
  public constructor(private store: Store<{ cart: Cart }>) {
    this.cart = this.store.select('cart').pipe(map(val => (this.currentCart = val)));
  }

  public addProduct(cartItem: CartItem): void {
    this.store.dispatch(addProduct({ cartItem }));
  }

  public removeProduct(id: number): void {
    this.store.dispatch(removeProduct({ id }));
  }
}
