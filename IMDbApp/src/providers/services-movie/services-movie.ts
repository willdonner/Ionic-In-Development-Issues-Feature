import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/*
  Generated class for the ServicesMovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
export enum SearchType {
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}
@Injectable()
export class ServicesMovieProvider {
  url = 'http://www.omdbapi.com/';
  apiKey = 'c5a999ec'; 
  constructor(public http: HttpClient) {
    console.log('Hello ServicesMovieProvider Provider');
  }
  searchData(title: string, type: SearchType, page: any): Observable<any> {
    let act = this.http.get(`${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}&page=${page}`).pipe(
      map(
        ret =>{
          let d = ret;
          return d;
        }
      )
    );
    return act;
  }

  searchDetail(id:string): Observable<any>{
    let act = this.http.get(`${this.url}?i=${id}&apiKey=${this.apiKey}`).pipe(
      map(
        ret =>{
          let d = ret;
          console.log("d");
          console.log(d);
          return d;
        }
      )
    )
    return act;
  }
}
