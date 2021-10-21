import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UsersService } from './services/users.service';
import { UsersComponent } from './components/users/users.component';
import { MyProfileModule } from '../my-profile/my-profile.module';
import { UserInfoComponent } from './components/user-info/user-info.component';


@NgModule({
  declarations: [UsersComponent,UserInfoComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MyProfileModule,
    SharedModule,    
  ], 
  exports:[UserInfoComponent] ,
  providers: [UsersService]
})
export class UsersModule { }
