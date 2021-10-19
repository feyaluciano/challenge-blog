import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdvertisingComponent } from './components/advertising/advertising.component';
import { FriendRequestsComponent } from './components/friend-requests/friend-requests.component';
import { FooterComponent } from './components/footer/footer.component';
import { MoreFeaturesComponent } from './components/more-features/more-features.component';
import { ChatComponent } from './components/chat/chat.component';



@NgModule({
  declarations: [HeaderComponent, NavbarComponent, AdvertisingComponent,FriendRequestsComponent, FooterComponent, MoreFeaturesComponent, ChatComponent],
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent, NavbarComponent,AdvertisingComponent,FriendRequestsComponent, FooterComponent, MoreFeaturesComponent, ChatComponent]
})
export class SharedModule { }
