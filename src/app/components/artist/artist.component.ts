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

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) { 
    this.router.params.subscribe(params =>{
      this.getArtist(params['id']);
    })
  }

  ngOnInit() {
  }

  public getArtist (id: string) {
    this.spotify.getArtist(id)
      .subscribe(artist => {
        console.log(artist);
        this.artist = artist;
      })
  }

}
