import { Area } from '@music/artist/models/area';
import { Tag } from '@music/artist/models/tag';

export interface Artist {
  id: string;
  type: any;
  'type-id': string;
  score: number;
  name: string;
  'sort-name': string;
  'country': string;
  area: Area;
  'begin-area': Area;
  disambiguation: string;
  isnis: object;
  'life-span': object;
  'aliases': object;
  'tags': Array<Tag>;
}

export class ArtistViewModel {
  constructor(
    public id: string,
    public name: string,
    public origin: string,
    public tags: Array<string>
  ) {
  }
}

export const createArtistViewModel = (artist: Artist) => new ArtistViewModel(
  artist.id,
  artist.name,
  artist.area?.name,
  artist.tags?.map(tag => tag.name) || []
);
