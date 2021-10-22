import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './components/posts/posts.component';
import { SharedModule } from '../shared/shared.module';
import { PostComponent } from './components/post/post.component';
import { UsersModule } from '../users/users.module';
import { NewEditPostComponent } from './components/new-edit-post/new-edit-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [PostsComponent,PostComponent,NewEditPostComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule,
    UsersModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[PostComponent]
})
export class PostsModule { }
