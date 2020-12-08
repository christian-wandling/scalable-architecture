import { NgModule } from '@angular/core';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { SharedModule } from '@shared/shared.module';
import { ArtistFacade } from '@music/artist/artist.facade';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromArtist from '@music/artist/_ngrx/artist.reducer';
import { ArtistEffects } from '@music/artist/_ngrx/artist.effects';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { ArtistRoutingModule } from '@music/artist/artist-routing.module';
import { ReleaseModule } from '@music/release/release.module';

@NgModule({
  declarations: [ ArtistListComponent, ArtistDetailComponent ],
  exports: [
    ArtistListComponent
  ],
  imports: [
    ArtistRoutingModule,
    SharedModule,
    StoreModule.forFeature(fromArtist.artistsFeatureKey, fromArtist.reducer),
    EffectsModule.forFeature([ ArtistEffects ]),
    ReleaseModule
  ],
  providers: [
    ArtistFacade
  ]
})
export class ArtistModule {
}
