import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

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
