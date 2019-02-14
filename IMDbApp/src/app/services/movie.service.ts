import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export enum SerachType {
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}

@Injectable({
  providedIn: 'root'
})


export class MovieService {
  url = 'http://www.omdbapi.com/';
  apiKey = 'c5a999ec';

  constructor(private http: HttpClient) { }
  searchData(title: string, type: SerachType): Observable<any> {
    return this.http.get(`${this.url}?s=${encodeURI(title)}`);
  }
}
