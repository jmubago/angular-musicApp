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

  public getArtist(text: string): Observable<any> {

    return this.getQuery(`search?q=${text}&type=artist&limit=15`)
      .pipe( map( data => {
        return data['artists'].items;
      }));
  }

  private getQuery(query: string){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBXY5itg1DwAXqkvze53k19HndDMy388G7pOJgNmv6ZoibWMYQkyaOtLgN69NqCtwUO47pDFIEP4nOqHaU'
    });

    const url = `https://api.spotify.com/v1/${query}`;

    return this.http.get(url, {headers});
  }
}
