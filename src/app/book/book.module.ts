import { NgModule } from '@angular/core';
import { BookRoutingModule } from './book-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BookDetailComponent } from '@book/book-detail/book-detail.component';
import { BookListComponent } from '@book/book-list/book-list.component';
import { SharedModule } from '@shared/shared.module';
import { BookFacade } from '@book/book.facade';
import { BookHttpService } from '@book/book-http.service';
import { BookNormalizrService } from '@book/book-normalizr.service';
import { BookEffects } from '@book/_ngrx/book.effects';
import * as fromBook from '@book/_ngrx/book.reducer';

@NgModule({
  declarations: [ BookDetailComponent, BookListComponent ],
  imports: [
    BookRoutingModule,
    SharedModule,
    StoreModule.forFeature(fromBook.booksFeatureKey, fromBook.reducer),
    EffectsModule.forFeature([ BookEffects ]),
  ],
  providers: [
    BookFacade,
    BookHttpService,
    BookNormalizrService
  ]
})
export class BookModule {
}
