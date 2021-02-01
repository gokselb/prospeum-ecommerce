import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { cartReducer } from './cart';
import { userReducer } from './user';

export const reducers: ActionReducerMap<any> = {
  router: routerReducer,
  user: userReducer,
  cart: cartReducer
};
