import { createAction, props } from '@ngrx/store';
import { Artist } from '@music/artist/models/artist.model';


export const searchArtists = createAction(
  '[Artist/API] Search Artists',
  props<{ term: string }>()
);

export const getFullArtistModel = createAction(
  '[Artist/API] Get Full Artist Model',
  props<{id: string}>()
);

export const setArtistsComplete = createAction(
  '[Artist/API] Set Artists Complete',
  props<{ artists: Artist[] }>()
);

export const setSelectedArtist = createAction(
  '[Artist] Set Selected Artist',
  props<{ id: string }>()
);
