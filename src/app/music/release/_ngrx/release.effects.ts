import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ReleaseActions from './release.actions';
import { concatMap, filter, map, switchMap } from 'rxjs/operators';
import { MusicHttpService } from '../../music-http.service';
import { MusicNormalizrService } from '../../music-normalizr.service';
import { getIdFromUrl } from '@core/utils/ngrx-utils';


@Injectable()
export class ReleaseEffects {

  setSelected$ = createEffect(() => this.actions$
    .pipe(
      ofType('@ngrx/router-store/navigated'),
      map((action: any) => getIdFromUrl(action.payload.event.url, 'release')),
      map(id => ReleaseActions.setSelectedRelease({ id }))
    )
  );

  getFullReleaseModel = createEffect(() => this.actions$
    .pipe(
      ofType(ReleaseActions.fetchFullReleaseModel, ReleaseActions.setSelectedRelease),
      filter(payload => !!payload.id),
      switchMap(payload => this.http.getRelease(payload.id)),
      map(res => this.normalizr.normalizeRelease(res)),
      concatMap(res => [
        ReleaseActions.upsertReleasesComplete({ releases: res.entities.releases }),
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
