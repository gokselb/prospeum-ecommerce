import { createAction, props } from '@ngrx/store';
import { CartItem } from 'src/app/models/cart.model';

export const addProduct = createAction('[CART] Product add', props<{ cartItem: CartItem }>());
export const removeProduct = createAction('[CART] Remove Product', props<{ id: number }>());
