import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReleaseDetailComponent } from './release-detail/release-detail.component';
import { ReleaseListComponent } from '@music/release/release-list/release-list.component';

const routes: Routes = [
  {
    path: '',
    component: ReleaseListComponent
  },
  {
    path: ':id',
    component: ReleaseDetailComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ReleaseRoutingModule {
}
