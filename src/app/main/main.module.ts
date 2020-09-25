import { NgModule } from '@angular/core';
import { YoutubeComponent} from './Youtube/components/youtube/youtube.component';
import { MainRoutingModule } from './mainRouting.module';
@NgModule({
  declarations:[ YoutubeComponent],
  imports:[MainRoutingModule],
  exports:[ YoutubeComponent],
  providers:[]
})

export class MainModule {}
