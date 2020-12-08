import { Injectable } from '@angular/core';
import { HttpBase } from '@core/models/http-base';
import { HttpClient, HttpParams } from '@angular/common/http';
import { appConfig } from '@config/app.config';
import { Observable } from 'rxjs';

@Injectable()
export class BookHttpService extends HttpBase {
  constructor(
    protected readonly http: HttpClient
  ) {
    super(http, appConfig.book.basePath);
  }

  searchBooks(term: string): Observable<any> {
    const params: HttpParams = this.createHttpParams({ q: term });

    return this.getAll('volumes', { params });
  }
}
