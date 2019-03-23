import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  public getNewReleases(): Observable<any> {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBxfUn92i21xmXp-ufQZ8ZPogdLgZBVy6UYBYd3my6Jhs_AySEUtNBMtNDmsmdeDC-sMRU3mMHWgjMBqeE'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers});
  }
}
