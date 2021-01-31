import { ActionReducerMap, State } from '@ngrx/store';
import { RouterReducerState } from '@ngrx/router-store';
import { routerReducer } from '@ngrx/router-store';
import { createSelector } from '@ngrx/store';

export interface StoreRootState {
  router: RouterReducerState<any>;
}
export const reducers: ActionReducerMap<StoreRootState> = {
  router: routerReducer
};

export const getRouterState = (state: StoreRootState) => {
  return state.router;
};

export const getCurrentRouteState = createSelector(getRouterState, (state: RouterReducerState) => state.state);
