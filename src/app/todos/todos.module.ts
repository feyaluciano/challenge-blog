import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './components/todos/todos.component';
import { SharedModule } from '../shared/shared.module';
import { TodosService } from './services/todos.service';


@NgModule({
  declarations: [TodosComponent],
  imports: [
    CommonModule,
    TodosRoutingModule,
    SharedModule,
  ],
  providers: [TodosService]
})
export class TodosModule { }
