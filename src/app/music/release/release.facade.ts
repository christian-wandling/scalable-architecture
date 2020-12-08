import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { StoreFacade } from '@core/models/store-facade';
import { ReleaseViewModel } from '@music/release/models/release.model';
import * as ReleaseState from '@music/release/_ngrx/release.selectors';
import * as ArtistState from '@music/artist/_ngrx/artist.selectors';
import * as fromRelease from '@music/release/_ngrx/release.reducer';
import { ArtistViewModel } from '@music/artist/models/artist.model';

@Injectable()
export class ReleaseFacade extends StoreFacade {

  readonly releasesOfSelectedArtist$: Observable<Array<ReleaseViewModel>> = this.takeAll(ReleaseState.getAllReleasesOfSelectedArtist);
  readonly selectedRelease$: Observable<ReleaseViewModel> = this.takeAll(ReleaseState.getSelectedRelease);
  readonly selectedArtist$: Observable<ArtistViewModel> = this.takeAll(ArtistState.getSelectedArtist);

  constructor(protected state$: Store<fromRelease.State>) {
    super(state$);
  }
}
