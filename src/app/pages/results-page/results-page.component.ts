import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.scss']
})
export class ResultsPageComponent implements OnInit {

  value: string = '';
  items: any[];

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
  }

  search(){
    console.log(this.value);
    // this.spotifyService.getResults(this.value).subscribe(res => {
    //   this.items = res;
    // });
  }

}
