import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './components/profile/profile.component';

const routes:Routes=[      
  {path : '' , redirectTo : '/my-profile/view' , pathMatch : 'full'},
  {
    path:'',
    children: [      
      { path: 'view', component: ProfileComponent },           
    ]   
  }  
  ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyProfileRoutingModule { }
