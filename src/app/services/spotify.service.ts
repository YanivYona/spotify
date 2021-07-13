import { Injectable } from '@angular/core';
import { HttpHandlerService } from './http-handler.service';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService extends HttpHandlerService {
  
  getResults(value: string){
    const url = `/${value}`;
    return this.get(url);
  }

}
