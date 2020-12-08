import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'book',
    pathMatch: 'full'
  },
  {
    path: 'book',
    loadChildren: () => import('@book/book.module')
      .then(m => m.BookModule)
  },
  {
    path: 'music',
    loadChildren: () => import('@music/music.module')
      .then(m => m.MusicModule)
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
