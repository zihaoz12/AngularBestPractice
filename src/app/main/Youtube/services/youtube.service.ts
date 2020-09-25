import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Video } from '../interface/Video';



@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private youtube_API = 'https://www.googleapis.com/youtube/v3/search';
  private youtube_API_token = 'AIzaSyAs7_6Hh5bTdqOj8VLoNZWQdtfkJmI1U4M';
  private resultsNum = 5;
  constructor(
    private http: HttpClient
  ) { }


  getVideos(value):Observable<Video[]>{
    return this.http.get<Video[]>(`${this.youtube_API}?q=${value}&key=${this.youtube_API_token}&part=snippet&type=video&maxResults=${this.resultsNum}`)
    .pipe(
      map((response:any) => response.items)
    )
  }
}
