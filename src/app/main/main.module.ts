import { NgModule } from '@angular/core';
import { YoutubeComponent} from './Youtube/components/youtube/youtube.component';
import { MainRoutingModule } from './mainRouting.module';
import { SharedModule } from '../shared/shared.module';
import { SearchListComponent } from './Youtube/components/youtube/search-list/search-list.component';
@NgModule({
  declarations:[ YoutubeComponent,SearchListComponent],
  imports:[MainRoutingModule,SharedModule],
  exports:[ YoutubeComponent,SearchListComponent],
  providers:[]
})

export class MainModule {}
