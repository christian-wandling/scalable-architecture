import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { appConfig } from '@config/app.config';
import { BookViewModel } from '@book/model/book.model';
import { BookFacade } from '@book/book.facade';
import { TableDef } from '@shared/model/table-def';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: [ './book-list.component.scss' ]
})
export class BookListComponent implements OnInit {
  readonly tableDef: TableDef = appConfig.book.tableDef;

  readonly books$: Observable<Array<BookViewModel>> = this.facade.books$;

  constructor(
    private facade: BookFacade,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
  }

  goToDetails(id: string): void {
    this.router.navigate([ id ], {relativeTo: this.route});
  }

  search(term: string): void {
    this.facade.search(term);
  }

}
