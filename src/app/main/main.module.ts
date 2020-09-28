import { NgModule } from '@angular/core';
import { YoutubeComponent} from './Youtube/components/youtube/youtube.component';
import { MainRoutingModule } from './mainRouting.module';
import { SharedModule } from '../shared/shared.module';
import { SearchListComponent } from './Youtube/components/youtube/search-list/search-list.component';
import { SearchInputComponent } from './Youtube/components/youtube/search-input/search-input.component';
@NgModule({
  declarations:[ YoutubeComponent,SearchListComponent,SearchInputComponent],
  imports:[MainRoutingModule,SharedModule],
  exports:[ YoutubeComponent,SearchListComponent,SearchInputComponent],
  providers:[]
})

export class MainModule {}
