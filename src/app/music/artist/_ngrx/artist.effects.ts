import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ArtistActions from './artist.actions';
import * as ReleaseActions from '@music/release/_ngrx/release.actions';
import { concatMap, filter, map, switchMap } from 'rxjs/operators';
import { MusicHttpService } from '../../music-http.service';
import { MusicNormalizrService } from '../../music-normalizr.service';
import { getIdFromUrl } from '@core/utils/ngrx-utils';


@Injectable()
export class ArtistEffects {

  searchArtist$ = createEffect(() => this.actions$
    .pipe(
      ofType(ArtistActions.searchArtists),
      switchMap(payload => this.http.searchArtists(payload.term)),
      map(res => this.normalizr.normalizeArtists(res)),
      concatMap(res => [
        ArtistActions.setArtistsComplete({ artists: res.entities.artists }),
      ])
    )
  );

  setSelected$ = createEffect(() =>
    this.actions$.pipe(
      ofType('@ngrx/router-store/navigated'),
      map((action: any) => getIdFromUrl(action.payload.event.url, 'artist')),
      map(id => ArtistActions.setSelectedArtist({ id }))
    )
  );

  getFullArtistModel = createEffect(() => this.actions$
    .pipe(
      ofType(ArtistActions.getFullArtistModel, ArtistActions.setSelectedArtist),
      filter(payload => !!payload.id),
      switchMap(payload => this.http.getArtist(payload.id)),
      map(res => this.normalizr.normalizeArtist(res)),
      concatMap(res => [
        ArtistActions.setArtistsComplete({ artists: res.entities.artists || [] }),
        ReleaseActions.upsertReleasesComplete({ releases: res.entities.releases || [] })
      ])
    )
  );

  constructor(
    private actions$: Actions,
    private http: MusicHttpService,
    private normalizr: MusicNormalizrService
  ) {
  }

}
