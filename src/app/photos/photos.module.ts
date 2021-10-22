import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotosRoutingModule } from './photos-routing.module';
import { PhotosComponent } from './photos/photos.component';
import { SharedModule } from '../shared/shared.module';
import { UsersModule } from '../users/users.module';


@NgModule({
  declarations: [PhotosComponent],
  imports: [
    CommonModule,
    
    PhotosRoutingModule,
    SharedModule,
    
  ]
})
export class PhotosModule { }
