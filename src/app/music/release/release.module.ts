import { NgModule } from '@angular/core';
import { ReleaseListComponent } from './release-list/release-list.component';
import { SharedModule } from '@shared/shared.module';
import { ReleaseFacade } from '@music/release/release.facade';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromRelease from '@music/release/_ngrx/release.reducer';
import { ReleaseEffects } from '@music/release/_ngrx/release.effects';
import { ReleaseDetailComponent } from './release-detail/release-detail.component';
import { ReleaseRoutingModule } from '@music/release/release-routing.module';
import { ReleaseTrackListComponent } from './release-track-list/release-track-list.component';

@NgModule({
  declarations: [ ReleaseListComponent, ReleaseDetailComponent, ReleaseTrackListComponent ],
  exports: [
    ReleaseListComponent
  ],
  imports: [
    ReleaseRoutingModule,
    SharedModule,
    StoreModule.forFeature(fromRelease.releasesFeatureKey, fromRelease.reducer),
    EffectsModule.forFeature([ ReleaseEffects ]),
  ],
  providers: [
    ReleaseFacade
  ]
})
export class ReleaseModule {
}
