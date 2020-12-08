import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import * as BookActions from './book.actions';
import { Book } from '@book/model/book.model';

export const booksFeatureKey = 'books';

export interface State extends EntityState<Book> {
  selectedId: string;
}

export const adapter: EntityAdapter<Book> = createEntityAdapter<Book>();

export const initialState: State = adapter.getInitialState({
  selectedId: undefined
});


export const reducer = createReducer(
  initialState,
  on(BookActions.loadBooks,
    (state, action) => adapter.setAll(Object.values(action.books || {}), state)
  ),

  on(BookActions.setSelectedBook,
    (state, action) => ({ ...state, selectedId: action.id })
  )
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
