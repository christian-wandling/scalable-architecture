import { ActionReducer, ActionReducerMap, createSelector, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromApp from './app.reducer';

;

export interface State {
  fromApp: fromApp.State;
}

export const reducers: ActionReducerMap<State> = {
  fromApp: fromApp.reducer
};

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [
  debug
] : [];

export const storeConfig = {
  metaReducers,
  runtimeChecks: {
    strictStateImmutability: true,
    strictActionImmutability: true,
  }
};

const appState = (state: State) => state.fromApp;
