import * as moment from 'moment';
import { Media } from '@music/release/models/media';
import { createMediaViewModel, MediaViewModel } from './media';

export interface Release {
  id: string;
  'artist-credit': Array<any>;
  count: number;
  country: string;
  date: string;
  'label-info': Array<any>;
  'media': Array<Media>;
  'release-events': Array<any>;
  'release-group': any;
  score: number;
  status: string;
  'text-representation': any;
  'title': string;
  'track-count': number;
  artist: string;
}

export class ReleaseViewModel {
  constructor(
    public id: string,
    public date: moment.Moment,
    public labels: Array<string>,
    public title: string,
    public media: Array<MediaViewModel>
  ) {
  }
}

export const createReleaseViewModel = (release: Release) => new ReleaseViewModel(
  release.id,
  release.date && moment(release.date),
  release[ 'label-info' ]?.map(info => info.label.name) || [ 'Unknown' ],
  release?.title || 'Unknown',
  release.media?.map(medium => createMediaViewModel(medium)) || [],
);
