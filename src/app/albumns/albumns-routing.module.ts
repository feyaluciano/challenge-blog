import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumnsComponent } from './components/albumns/albumns.component';

const routes:Routes=[      
  {path : '' , redirectTo : '/albumns/all' , pathMatch : 'full'},
  {
    path:'',
    children: [      
      { path: 'all', component: AlbumnsComponent },
      { path: ':userId', component: AlbumnsComponent },            
    ]   
  }  
  ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumnsRoutingModule { }
