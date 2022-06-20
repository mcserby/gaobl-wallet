import {ActionReducer, ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../../environments/environment';
import {AppState} from '../state/app.state';
import {authReducer} from './auth.reducer';

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer
};

// console.log all actions
export function debugReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

const metaReducersList = [];
if (!environment.production) {
  metaReducersList.push(debugReducer);
}
export const metaReducers: MetaReducer<AppState>[] = metaReducersList;
