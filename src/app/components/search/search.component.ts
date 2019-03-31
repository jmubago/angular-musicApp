import { Component, OnInit } from '@angular/core';

import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchResults: any[] = [];
  public loading: boolean;

  constructor(private spotify: SpotifyService) { }

  ngOnInit() {
  }

  public searchArtist(text: string){

    this.loading = true;

    this.spotify.getArtists(text)
    .subscribe(data => {
      this.searchResults = data;
      this.loading = false;
    })
  }
}
