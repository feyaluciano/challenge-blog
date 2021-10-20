import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';

const routes:Routes=[      
  {path : '' , redirectTo : '/todos/all' , pathMatch : 'full'},
  {
    path:'',
    children: [      
      { path: 'all', component: TodosComponent },
      { path: ':userId', component: TodosComponent },            
    ]   
  }  
  ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
