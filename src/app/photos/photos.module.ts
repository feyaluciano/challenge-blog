import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotosRoutingModule } from './photos-routing.module';
import { PhotosComponent } from './photos/photos.component';
import { SharedModule } from '../shared/shared.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [PhotosComponent],
  imports: [
    CommonModule,
    
    PhotosRoutingModule,
    SharedModule,
    InfiniteScrollModule
    
  ]
})
export class PhotosModule { }
