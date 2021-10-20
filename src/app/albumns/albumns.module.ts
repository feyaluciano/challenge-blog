import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumnsRoutingModule } from './albumns-routing.module';
import { AlbumnsComponent } from './components/albumns/albumns.component';
import { SharedModule } from '../shared/shared.module';
import { AlbumnsService } from './services/albumns.service';


@NgModule({
  declarations: [AlbumnsComponent],
  imports: [
    CommonModule,
    AlbumnsRoutingModule,
    SharedModule,
  ],
  providers: [AlbumnsService]
})
export class AlbumnsModule { }
