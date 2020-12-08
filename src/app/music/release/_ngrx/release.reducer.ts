import { createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as ReleaseActions from './release.actions';
import { Release } from '@music/release/models/release.model';

export const releasesFeatureKey = 'releases';

export interface State extends EntityState<Release> {
  selectedId: string;
}

export const adapter: EntityAdapter<Release> = createEntityAdapter<Release>();

export const initialState: State = adapter.getInitialState({
  selectedId: undefined
});


export const reducer = createReducer(
  initialState,
  on(ReleaseActions.upsertReleasesComplete,
    (state, action) => adapter.upsertMany(Object.values(action.releases || {}), state)
  ),
  on(ReleaseActions.setSelectedRelease,
    (state, action) => ({ ...state, selectedId: action.id })
  )
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
