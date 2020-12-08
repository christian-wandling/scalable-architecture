import { Injectable } from '@angular/core';
import { normalize, schema } from 'normalizr';

@Injectable()
export class MusicNormalizrService {

  constructor() {
  }

  private readonly release = new schema.Entity('releases', {}, {
    processStrategy: (value, parent) => {
      return { ...value, artist: parent.id };
    }
  });

  private readonly artist = new schema.Entity('artists', {
    releases: [ this.release ]
  });

  normalizeArtists(data: any): any {
    return normalize(
      data,
      new schema.Object({
        artists: [ this.artist ]
      })
    );
  }

  normalizeArtist(data: any): any {
    return normalize(
      data,
      this.artist
    );
  }

  normalizeReleases(data: any): any {
    return normalize(
      data,
      new schema.Object({
        releases: [ this.release ]
      })
    );
  }

  normalizeRelease(data: any): any {
    return normalize(
      data,
      this.release
    );
  }
}
