import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { addProduct, removeProduct } from './cart.actions';

export const initialState: any = { cartItems: [] };

const CartReducer = createReducer(
  initialState,
  on(addProduct, (state, { cartItem }) => {
    return { cartItems: [...state.cartItems, cartItem] };
  }),

  on(removeProduct, (state, { id }) => {
    const cartItems: CartItem[] = state.cartItems;
    cartItems.splice(
      cartItems.findIndex(val => val.product.id === id),
      1
    );
    return { cartItems };
  })
);

export function cartReducer(state: Cart, action: Action): ActionReducer<Cart> {
  return CartReducer(state, action);
}
