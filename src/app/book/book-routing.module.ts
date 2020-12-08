import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from '@book/book-list/book-list.component';
import { BookDetailComponent } from '@book/book-detail/book-detail.component';

const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path: ':id',
    component: BookDetailComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class BookRoutingModule {
}