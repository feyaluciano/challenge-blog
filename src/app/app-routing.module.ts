import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes:Routes=[    
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(
      m => m.AuthModule
      ),         
  },
  {
    path: 'posts',
    loadChildren: () => import('./posts/posts.module').then(
      m => m.PostsModule
      ),         
  },
  {
    path: 'my-profile',
    loadChildren: () => import('./my-profile/my-profile.module').then(m => m.MyProfileModule
      ),         
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule
      ),         
  },
  
  {
    path: 'albumns',
    loadChildren: () => import('./albumns/albumns.module').then(m => m.AlbumnsModule
      ),         
  },
  {
    path: 'todos',
    loadChildren: () => import('./todos/todos.module').then(m => m.TodosModule
      ),         
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule
      ),         
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
