import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public newReleases: any[] = [];

  constructor(private spotify: SpotifyService) { 
   this.spotify.getNewReleases()
   .subscribe(data => {
     console.log(data.albums.items);
      this.newReleases = data.albums.items;
   });
  }

  ngOnInit() {
  }

}
