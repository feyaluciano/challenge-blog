import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';

const routes:Routes=[      
  {path : '' , redirectTo : '/users/all' , pathMatch : 'full'},
  {
    path:'',
    children: [      
      { path: 'all', component: UsersComponent },               
    ]   
  }  
  ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
