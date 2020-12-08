import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as BookActions from './book.actions';
import { concatMap, filter, map, switchMap } from 'rxjs/operators';
import { BookHttpService } from '@book/book-http.service';
import { BookNormalizrService } from '@book/book-normalizr.service';
import { getIdFromUrl } from '@core/utils/ngrx-utils';


@Injectable()
export class BookEffects {

  searchBooks$ = createEffect(() => this.actions$
    .pipe(
      ofType(BookActions.searchBooks),
      switchMap(payload => this.http.searchBooks(payload.term)),
      map(res => this.normalizr.normalizeBooks(res)),
      concatMap(res => [
        BookActions.loadBooks({ books: res.entities.books })
      ])
    )
  );

  getFullBookModel = createEffect(() => this.actions$
    .pipe(
      ofType(BookActions.setSelectedBook),
      filter(payload => !!payload.id),
      switchMap(payload => this.http.getOne('volumes', payload.id)),
      map(res => this.normalizr.normalizeBook(res)),
      concatMap(res => [
        BookActions.loadBooks({ books: res.entities.books })
      ])
    )
  );

  setSelected$ = createEffect(() =>
    this.actions$.pipe(
      ofType('@ngrx/router-store/navigated'),
      map((action: any) => getIdFromUrl(action.payload.event.url, 'book')),
      map(id => BookActions.setSelectedBook({ id }))
    )
  );

  constructor(
    private actions$: Actions,
    private http: BookHttpService,
    private normalizr: BookNormalizrService
  ) {
  }

}
