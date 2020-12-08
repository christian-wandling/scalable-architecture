import * as fromBook from './book.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookViewModel, createBookViewModel } from '@book/model/book.model';

export const selectBookState = createFeatureSelector<fromBook.State>(
  fromBook.booksFeatureKey
);

const getBooks = createSelector(selectBookState, fromBook.selectAll);
const getBooksDict = createSelector(selectBookState, fromBook.selectEntities);
const getSelectedId = createSelector(selectBookState, state => state.selectedId);

export const getSelectedBook = createSelector(
  getBooksDict,
  getSelectedId,
  (books, id) => books[ id ] && createBookViewModel(books[ id ])
);

export const getAllBooks = createSelector(
  getBooks,
  (books) => books.map(book => createBookViewModel(book))
);
