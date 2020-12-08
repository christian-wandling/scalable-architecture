import { createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as ArtistActions from './artist.actions';
import { Artist } from '@music/artist/models/artist.model';

export const artistsFeatureKey = 'artists';

export interface State extends EntityState<Artist> {
  selectedId: string;
}

export const adapter: EntityAdapter<Artist> = createEntityAdapter<Artist>();

export const initialState: State = adapter.getInitialState({
  selectedId: undefined
});


export const reducer = createReducer(
  initialState,
  on(ArtistActions.setArtistsComplete,
    (state, action) => adapter.setAll(Object.values(action.artists || {}), state)
  ),
  on(ArtistActions.setSelectedArtist,
    (state, action) => ({ ...state, selectedId: action.id })
  )
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
