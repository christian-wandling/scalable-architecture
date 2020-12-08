import { Action, MemoizedSelectorWithProps, Store } from '@ngrx/store';
import { dispatchAction, takeOne, takeAll } from '@core/utils/ngrx-utils';

export abstract class StoreFacade {

  protected constructor(protected state$: Store<any>) {
  }

  dispatch = (action: Action) => dispatchAction(this.state$, action);
  takeOne = <T, U, V>(selector: MemoizedSelectorWithProps<T, U, V>, params?: any) => takeOne(this.state$, selector, params);
  takeAll = <T, U, V>(selector: MemoizedSelectorWithProps<T, U, V>, params?: any) => takeAll(this.state$, selector, params);
}
