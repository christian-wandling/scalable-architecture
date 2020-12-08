import { createAction, props } from '@ngrx/store';
import { Book } from '@book/model/book.model';


export const searchBooks = createAction(
  '[Book] Search Books',
  props<{ term: string }>()
);

export const loadBooks = createAction(
  '[Book] Load Books',
  props<{ books: Book[] }>()
);

export const setSelectedBook = createAction(
  '[Book] Set Selected Book',
  props<{ id: string }>()
);
