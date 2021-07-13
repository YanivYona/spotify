import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHandlerService } from './http-handler.service';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService extends HttpHandlerService {

  baseUrl: string = environment.spotifyBaseUrl;
  
  getResults(value: string){
    const url = `${this.baseUrl}`;
    return this.get(url);
  }

}
