import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './components/posts/posts.component';
import { SharedModule } from '../shared/shared.module';
import { PostsService } from './services/posts.service';

@NgModule({
  declarations: [PostsComponent],
  imports: [SharedModule],
  providers: [],
  exports: [PostsComponent]
})
export class PostsModule {}
