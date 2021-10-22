import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewEditPostComponent } from './components/new-edit-post/new-edit-post.component';
import { PostsComponent } from './components/posts/posts.component';

const routes:Routes=[      
  {path : '' , redirectTo : '/posts/all' , pathMatch : 'full'},
  {
    path:'',
    children: [      
      { path: 'all', component: PostsComponent },
      { path: 'new', component: NewEditPostComponent },
      { path: 'edit/:postId', component: NewEditPostComponent },
      { path: ':userId', component: PostsComponent },            
    ]   
  }  
  ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
