import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotosComponent } from './photos/photos.component';

const routes:Routes=[      
  {path : '' , redirectTo : '/photos/all' , pathMatch : 'full'},
  {
    path:'',
    children: [      
      { path: 'all', component: PhotosComponent },
      { path: ':albumId', component: PhotosComponent },            
    ]   
  }  
  ]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotosRoutingModule { }
