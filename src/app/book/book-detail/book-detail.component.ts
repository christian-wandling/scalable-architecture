import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookViewModel } from '@book/model/book.model';
import { BookFacade } from '@book/book.facade';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: [ './book-detail.component.scss' ]
})
export class BookDetailComponent implements OnInit {

  readonly book$: Observable<BookViewModel> = this.facade.selected$;

  constructor(
    private readonly facade: BookFacade
  ) {
  }

  ngOnInit(): void {
  }

}
