import * as fromRelease from './release.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { createReleaseViewModel } from '@music/release/models/release.model';
import * as ArtistState from '@music/artist/_ngrx/artist.selectors';

export const selectReleaseState = createFeatureSelector<fromRelease.State>(
  fromRelease.releasesFeatureKey
);

const getReleases = createSelector(selectReleaseState, fromRelease.selectAll);
const getReleasesDict = createSelector(selectReleaseState, fromRelease.selectEntities);
const getSelectedId = createSelector(selectReleaseState, state => state.selectedId);

export const getSelectedRelease = createSelector(
  getReleasesDict,
  getSelectedId,
  (releases, id) => releases[ id ] && createReleaseViewModel(releases[ id ])
);

export const getAllReleases = createSelector(
  getReleases,
  releases => releases.map(release => createReleaseViewModel(release))
);

export const getAllReleasesOfSelectedArtist = createSelector(
  getReleases,
  ArtistState.getSelectedId,
  (releases, artistId) => releases
    .filter(release => release.artist === artistId)
    .map(release => createReleaseViewModel(release))
);

