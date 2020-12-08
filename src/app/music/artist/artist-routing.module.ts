import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ArtistListComponent
  },
  {
    path: ':id',
    component: ArtistDetailComponent
  },
  {
    path: ':id/release',
    loadChildren: () => import('@app/music/release/release.module')
      .then(m => m.ReleaseModule)
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ArtistRoutingModule {
}
