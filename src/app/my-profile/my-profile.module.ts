import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyProfileRoutingModule } from './my-profile-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './components/profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MainInformationComponent } from './components/main-information/main-information.component';
import { MoreInformationComponent } from './components/more-information/more-information.component';
import { ModalUserComponent } from './components/modal-user/modal-user.component';


@NgModule({
  declarations: [ProfileComponent,MainInformationComponent,MoreInformationComponent,ModalUserComponent],
  imports: [
    SharedModule,  
    CommonModule,
    MyProfileRoutingModule,
    ReactiveFormsModule
  ],
  exports:[ProfileComponent,MainInformationComponent,MoreInformationComponent],
})
export class MyProfileModule { }
