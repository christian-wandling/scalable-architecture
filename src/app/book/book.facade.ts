import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { StoreFacade } from '@core/models/store-facade';
import {  BookViewModel } from '@book/model/book.model';
import * as BookState from './_ngrx/book.selectors';
import * as BookActions from '@book/_ngrx/book.actions';
import * as fromBook from './_ngrx/book.reducer';

@Injectable()
export class BookFacade extends StoreFacade {

  readonly books$: Observable<Array<BookViewModel>> = this.takeAll(BookState.getAllBooks);
  readonly selected$: Observable<BookViewModel> = this.takeAll(BookState.getSelectedBook);

  readonly search = (term: string) => this.dispatch(BookActions.searchBooks({ term }));

  constructor(protected state$: Store<fromBook.State>) {
    super(state$);
  }
}
