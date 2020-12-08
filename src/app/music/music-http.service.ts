import { Injectable } from '@angular/core';
import { HttpBase } from '@core/models/http-base';
import { HttpClient, HttpParams } from '@angular/common/http';
import { appConfig } from '@config/app.config';
import { Observable } from 'rxjs';

@Injectable()
export class MusicHttpService extends HttpBase {
  constructor(
    protected readonly http: HttpClient
  ) {
    super(http, appConfig.music.basePath);
  }

  searchArtists(term: string): Observable<any> {
    const params: HttpParams = this.createHttpParams({ query: term });

    return this.getAll('artist', { params });
  }

  getArtist(id: string): Observable<any> {
    const params: HttpParams = this.createHttpParams({ inc: 'releases' });

    return this.getOne('artist', id, { params });
  }

  getRelease(id: string): Observable<any> {
    const params: HttpParams = this.createHttpParams({ inc: 'recordings' });

    return this.getOne('release', id, { params });
  }
}
