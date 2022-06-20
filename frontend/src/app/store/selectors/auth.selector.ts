import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppState} from '../state/app.state';
import {AuthState, AuthStateName, initialAuthState} from '../state/auth.state';

export const selectAuthStore = createFeatureSelector<AppState, AuthState>(AuthStateName);

export const selectPrivateKey = createSelector(
  selectAuthStore,
  (state: AuthState) => state ? state.privateKey : initialAuthState.privateKey
);
