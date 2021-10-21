import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './components/posts/posts.component';
import { SharedModule } from '../shared/shared.module';
import { PostComponent } from './components/post/post.component';
import { UsersModule } from '../users/users.module';



@NgModule({
  declarations: [PostsComponent,PostComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule,
    UsersModule
  ],
  exports:[PostComponent]
})
export class PostsModule { }
