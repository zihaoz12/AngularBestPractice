import { NgModule } from '@angular/core';
import { YoutubeComponent} from './Youtube/components/youtube/youtube.component';
import { MainRoutingModule } from './mainRouting.module';
import { SharedModule } from '../shared/shared.module';
import { SearchListComponent } from './Youtube/components/youtube/search-list/search-list.component';
import { SearchInputComponent } from './Youtube/components/youtube/search-input/search-input.component';
import { RouterDemoComponent } from './RouterDemo/RouterDemo/RouterDemo.component';
import { DesignSystemComponent } from './DesignSystem/DesignSystem/DesignSystem.component';
import { DesignSystemModule } from 'projects/design-system/src/public-api';
@NgModule({
  declarations:[
    YoutubeComponent,
    SearchListComponent,
    SearchInputComponent,
    RouterDemoComponent,
    DesignSystemComponent
  ],
  imports:[
    MainRoutingModule,
    SharedModule,
    DesignSystemModule
  ],
  exports:[
    YoutubeComponent,
    SearchListComponent,
    SearchInputComponent,
    RouterDemoComponent,
    DesignSystemComponent
  ],
  providers:[]
})

export class MainModule {}
