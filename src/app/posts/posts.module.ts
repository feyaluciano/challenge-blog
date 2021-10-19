import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './components/posts/posts.component';
import { SharedModule } from '../shared/shared.module';
import { PostComponent } from './components/post/post.component';



@NgModule({
  declarations: [PostsComponent,PostComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule
  ],
  exports:[PostComponent]
})
export class PostsModule { }
