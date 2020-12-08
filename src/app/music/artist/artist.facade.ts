import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { StoreFacade } from '@core/models/store-facade';
import { ArtistViewModel } from '@music/artist/models/artist.model';
import * as ArtistState from '@music/artist/_ngrx/artist.selectors';
import * as ArtistActions from '@music/artist/_ngrx/artist.actions';
import * as fromArtist from '@music/artist/_ngrx/artist.reducer';

@Injectable()
export class ArtistFacade extends StoreFacade {

  readonly artists$: Observable<Array<ArtistViewModel>> = this.takeAll(ArtistState.getAllArtists);
  readonly selected$: Observable<ArtistViewModel> = this.takeAll(ArtistState.getSelectedArtist);

  readonly searchArtists = (term: string) => this.dispatch(ArtistActions.searchArtists({ term }));

  constructor(protected state$: Store<fromArtist.State>) {
    super(state$);
  }
}
