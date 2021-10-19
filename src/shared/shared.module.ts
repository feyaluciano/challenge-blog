import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdvertisingComponent } from './components/advertising/advertising.component';



@NgModule({
  declarations: [HeaderComponent, NavbarComponent, AdvertisingComponent],
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent, NavbarComponent,AdvertisingComponent]
})
export class SharedModule { }
