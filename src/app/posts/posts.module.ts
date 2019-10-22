import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './components/posts/posts.component';
import { SharedModule } from '../shared/shared.module';
import { PostsService } from './services/posts.service';
import { CommentsComponent } from './components/comments/comments.component';
import { PostsRoutingModule } from './postsRouting.module';

@NgModule({
  declarations: [PostsComponent, CommentsComponent],
  imports: [SharedModule, PostsRoutingModule],
  providers: [],
  exports: [PostsComponent]
})
export class PostsModule {}
