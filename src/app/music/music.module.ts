import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicRoutingModule } from './music-routing.module';
import { MusicFacade } from './music.facade';
import { MusicHttpService } from '@music/music-http.service';
import { MusicNormalizrService } from './music-normalizr.service';
import { ReleaseModule } from '@music/release/release.module';
import { ArtistModule } from '@music/artist/artist.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MusicRoutingModule,
  ],
  providers: [
    MusicFacade,
    MusicHttpService,
    MusicNormalizrService,
    ReleaseModule,
    ArtistModule
  ]
})
export class MusicModule {
}
