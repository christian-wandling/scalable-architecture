import { Track } from '@music/release/models/track';
import { createTrackViewModel, TrackViewModel } from './track';

export interface Media {
  tracks: Array<Track>;
  format: string;
  'format-id': string;
  'title': string;
  'track-offset': number;
  'track-count': number;
  'position': number;
}

export class MediaViewModel {
  constructor(
    public formatId: string,
    public format: string,
    public tracks: Array<TrackViewModel>,
  ) {
  }
}

export const createMediaViewModel = (media: Media) => new MediaViewModel(
  media[ 'format-id' ],
  media.format,
  media.tracks.map(track => createTrackViewModel(track))
);
