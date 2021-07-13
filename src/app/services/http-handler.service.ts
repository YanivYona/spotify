import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpHandlerService {
  public headers = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
  }

  public get(url: string, params?: {} | undefined): Observable<any> {
    return this.http.get(url, { params, headers: this.headers });
  }
}
