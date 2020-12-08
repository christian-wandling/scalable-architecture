export interface Track {
  id: string;
  number: string;
  position: number;
  recording: any;
  title: string;
  length: number;
}

export class TrackViewModel {
  constructor(
    public id: string,
    public trackNumber: string,
    public title: string,
    public length: string
  ) {
  }

  static formatTrackLength(totalSeconds: number): string {
    const seconds = Math.floor(totalSeconds % 60);
    const minutes = Math.floor((totalSeconds / 60) % 60);
    const hours = Math.floor((totalSeconds / 60 / 24) % 60);

    return `
        ${hours ? hours + ':' : ''}
        ${minutes > 9 ? minutes : '0' + minutes}:
        ${seconds > 9 ? seconds : '0' + seconds}
      `;
  }
}

export const createTrackViewModel = (track: Track) => new TrackViewModel(
  track.id,
  track.number,
  track.title,
  TrackViewModel.formatTrackLength(track.length / 1000)
);
