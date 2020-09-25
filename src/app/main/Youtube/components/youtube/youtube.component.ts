import { Component, OnInit } from '@angular/core';
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
    this.youtubeServices.getVideos(value).subscribe( items => {
      this.videos = items;
      console.log('videos:',this.videos);
      this.loading = false;
    })


  }

}
