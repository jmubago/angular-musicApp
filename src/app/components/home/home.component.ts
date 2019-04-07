import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public newReleases: any[] = [];
  public loading: boolean;
  public error: boolean;
  public errorMessage: string;

  constructor(private spotify: SpotifyService) { 
    this.loading = true;
    this.error = false;
    this.spotify.getNewReleases()
    .subscribe(data => {
      this.newReleases = data;
      this.loading = false;
    }, (errorService)=>{
      this.loading = false;
      this.error = true;
      this.errorMessage = errorService.error.error.message;
    });
  }

  ngOnInit() {
  }

}
