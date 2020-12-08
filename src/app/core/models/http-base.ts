import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Rfc3986HttpParamEncoder } from '@core/encoders/rfc-3986-http-param-encoder';

export abstract class HttpBase {

  readonly catchErrorFn = catchError(error => throwError(error));

  protected constructor(
    protected readonly http: HttpClient,
    protected readonly basePath: string
  ) {
  }

  getOne(endpoint: string, id: string, options?: any): Observable<any> {
    return this.http.get(`${this.basePath}/${endpoint}/${id}`, options)
      .pipe(this.catchErrorFn);

  }

  getAll(endpoint: string, options?: any): Observable<any> {
    return this.http.get(`${this.basePath}/${endpoint}`, options)
      .pipe(this.catchErrorFn);
  }

  post(endpoint: string, body?: any, options?: any): Observable<any> {
    return this.http.post(`${this.basePath}/${endpoint}`, body, options)
      .pipe(this.catchErrorFn);
  }

  put(endpoint: string, id: string, body?: any, options?: any): Observable<any> {
    return this.http.put(`${this.basePath}/${endpoint}/${id}`, body, options)
      .pipe(this.catchErrorFn);
  }

  delete(endpoint: string, id: string, options?: any): Observable<any> {
    return this.http.delete(`${this.basePath}/${endpoint}`, options)
      .pipe(this.catchErrorFn);
  }

  createHttpParams = (fromObject: any) => {
    return new HttpParams({
      fromObject,
      encoder: new Rfc3986HttpParamEncoder()
    });
  };
}
