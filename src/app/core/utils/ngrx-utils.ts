import { Action, select, Store } from '@ngrx/store';
import { take } from 'rxjs/operators';

export const takeAll = (state: Store<any>, selector, params?: any) => state.pipe(
  select(selector, params)
);

export const takeOne = (state: Store<any>, selector: any, params?: any) => state.pipe(
  select(selector, params),
  take(1)
);

export const dispatchAction = (state: Store<any>, action: Action): void => state.dispatch(action);

export const getIdFromUrl = (url: string, entity: string): string => {
  const routes: Array<string> = url.split('/');

  if (!routes.includes(entity)) {
    return;
  }

  return routes[ routes.findIndex(route => route === entity) + 1 ];
};
