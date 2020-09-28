import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { Video } from '../../interface/Video';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})
export class YoutubeComponent implements OnInit {

  videos: Video[]=[];
  loading: boolean = false;

  constructor(
    private youtubeServices:YoutubeService
  ) { }

  ngOnInit() {
  }

  getVideos(value:string){
    this.loading = true;
    this.youtubeServices.getVideos(value).subscribe( (items:any) => {
      this.videos = items.map(item =>{
        return {
            title: item.snippet.title,
            videoId: item.id.videoId,
            videoUrl: `https://www.youtube.com/watch?v=${item.id.videoId}`,
            channelId: item.snippet.channelId,
            channelUrl: `https://www.youtube.com/channel/${item.snippet.channelId}`,
            channelTitle: item.snippet.channelTitle,
            description: item.snippet.description,
            publishedAt: new Date(item.snippet.publishedAt),
            thumbnail: item.snippet.thumbnails.high.url
        }
      });
      console.log('videos:',this.videos);
      this.loading = false;
    })


  }

}
