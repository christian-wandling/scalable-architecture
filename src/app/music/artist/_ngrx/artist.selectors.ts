import * as fromArtist from './artist.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { createArtistViewModel } from '@music/artist/models/artist.model';

export const selectArtistState = createFeatureSelector<fromArtist.State>(
  fromArtist.artistsFeatureKey
);

const getArtists = createSelector(selectArtistState, fromArtist.selectAll);
const getArtistsDict = createSelector(selectArtistState, fromArtist.selectEntities);
export const getSelectedId = createSelector(selectArtistState, state => state.selectedId);

export const getSelectedArtist = createSelector(
  getArtistsDict,
  getSelectedId,
  (artists, id) => artists[ id ] && createArtistViewModel(artists[id])
);

export const getAllArtists = createSelector(
  getArtists,
  artists => artists.map(artist => createArtistViewModel(artist))
);


