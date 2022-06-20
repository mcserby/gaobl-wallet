import {Action, createReducer, on} from '@ngrx/store';
import {AuthState, initialAuthState} from '../state/auth.state';
import {login, logout} from '../actions/auth.action';

const authReducerField = createReducer(
  initialAuthState,
  on(login, (state, {payload}) => {
    return {
      ...state,
      privateKey: payload
    };
  }),
  on(logout, (state) => {
    return {
      ...state,
      privateKey: ''
    };
  })
);

export function authReducer(state: AuthState | undefined, action: Action): any {
  return authReducerField(state, action);
}
