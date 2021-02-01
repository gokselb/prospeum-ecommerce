import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { loggedIn, loggedOut } from './user.actions';

export const initialState: User = null;

const UserReducer = createReducer(
  initialState,
  on(loggedIn, (state, { user }) => user),

  on(loggedOut, () => null)
);

export function userReducer(state: User, action: Action): ActionReducer<User> {
  return UserReducer(state, action);
}
