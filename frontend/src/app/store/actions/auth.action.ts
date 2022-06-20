import {createAction, props} from '@ngrx/store';

export const logoutType = '[AUTH] Logging out...';
export const logout = createAction(logoutType);
export const logoutSuccessType = '[AUTH] Logout successfully!';
export const logoutSuccess = createAction(logoutSuccessType);

export const loginType = '[AUTH] Logging in...';
export const login = createAction(loginType, props<{payload: string}>());
export const loginSuccessType = '[AUTH] Login successfully!';
export const loginSuccess = createAction(logoutSuccessType);
