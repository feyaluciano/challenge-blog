import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumnsRoutingModule } from './albumns-routing.module';
import { AlbumnsComponent } from './components/albumns/albumns.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [AlbumnsComponent],
  imports: [
    CommonModule,
    AlbumnsRoutingModule,
    SharedModule,
  ]
})
export class AlbumnsModule { }
