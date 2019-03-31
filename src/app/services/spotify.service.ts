import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  public getNewReleases(): Observable<any> {

    return this.getQuery('browse/new-releases?limit=20')
      .pipe( map( data => {
          return data['albums'].items;
        }));
  }

  public getArtists(text: string): Observable<any> {

    return this.getQuery(`search?q=${text}&type=artist&limit=15`)
      .pipe( map( data => {
        return data['artists'].items;
      }));
  }

  public getArtist(artistId: string){
    return this.getQuery(`artists/${artistId}`);
  }


  // ## Private Methods
  private getQuery(query: string){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAu4XYpQu0uS9FLbDy32UXVzQGSrTWj_29zxwfx2PlZjcSOipl1LiEgb-NYxChi-lGYKY7CKQlA6eamymY'
    });

    const url = `https://api.spotify.com/v1/${query}`;

    return this.http.get(url, {headers});
  }
}
