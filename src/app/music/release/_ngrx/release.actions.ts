import { createAction, props } from '@ngrx/store';
import { Release } from '@music/release/models/release.model';

export const fetchFullReleaseModel = createAction(
  '[Release/API] Fetch Full Release Model',
  props<{ id: string }>()
);

export const upsertReleaseComplete = createAction(
  '[Release] Upsert Release Complete',
  props<{ release: Release }>()
);

export const upsertReleasesComplete = createAction(
  '[Release/API] Upsert Releases Complete',
  props<{ releases: Release[] }>()
);

export const setSelectedRelease = createAction(
  '[Release] Set Selected Release',
  props<{ id: string }>()
);
