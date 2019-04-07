import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  public artist: any = {};
  public tracks: any[] = [];
  public loading: boolean;

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) { 
    this.router.params.subscribe(params =>{
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    })
  }

  ngOnInit() {
  }

  public getArtist (id: string) {
    this.loading = true;
    this.spotify.getArtist(id)
      .subscribe(artist => {
        console.log(artist);
        this.artist = artist;
        this.loading = false;
      })
  }

  public getTopTracks(id: string) {
    this.loading = true;
    this.spotify.getTopTracks(id)
      .subscribe(tracks => {
        this.tracks = tracks;
        console.log(tracks);

        this.loading = false;
      })
  }

}
