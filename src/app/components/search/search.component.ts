import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchResults: any[] = [];

  constructor(private spotify: SpotifyService) { }

  ngOnInit() {
  }

  public searchArtist(text: string){
    this.spotify.getArtist(text)
    .subscribe(data => {
      console.log(data);
      this.searchResults = data;
    })
  }
}
