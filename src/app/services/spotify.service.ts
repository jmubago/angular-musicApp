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

  public getTopTracks(artistId: string){
    return this.getQuery(`artists/${artistId}/top-tracks?country=us`)
      .pipe( map(data => {
        return data['tracks']
      }))
  }

  // ## Private Methods
  private getQuery(query: string){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBBnjW6ghk-E3qTyczv7tZ6fn3WTQHLLNVvekXetfy54FoNdbBrL44_qTdV4P9rrjTCRag0bDEl_7SK9Bg'
    });

    const url = `https://api.spotify.com/v1/${query}`;

    return this.http.get(url, {headers});
  }
}
