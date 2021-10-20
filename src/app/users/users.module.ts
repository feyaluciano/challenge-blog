import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UsersService } from './services/users.service';
import { UsersComponent } from './components/users/users.component';
import { MyProfileModule } from '../my-profile/my-profile.module';


@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MyProfileModule,
    SharedModule,
    
  ],  
  providers: [UsersService]
})
export class UsersModule { }
