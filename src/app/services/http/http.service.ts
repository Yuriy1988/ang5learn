import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {
  constructor(
    private httpClient: HttpClient,
  ) {}

  get(url: string, options?): Observable<ArrayBuffer> {
    return this.httpClient.get(url, options);
  }
}
