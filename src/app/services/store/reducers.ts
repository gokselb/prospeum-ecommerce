import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { userReducer } from './user';

export const reducers: ActionReducerMap<any> = {
  router: routerReducer,
  user: userReducer
};
