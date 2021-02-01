import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

export const loggedIn = createAction('[USER] Logged In', props<{ user: User }>());
export const loggedOut = createAction('[USER] Logged Out');
