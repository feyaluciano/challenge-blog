import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdvertisingComponent } from './components/advertising/advertising.component';
import { FriendRequestsComponent } from './components/friend-requests/friend-requests.component';
import { FooterComponent } from './components/footer/footer.component';
import { MoreFeaturesComponent } from './components/more-features/more-features.component';
import { ChatComponent } from './components/chat/chat.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { MyProfileModule } from '../my-profile/my-profile.module';
import { RandomDateDirective } from '../core/directives/random-date.directive';
import { ModalAlertComponent } from './components/modal-alert/modal-alert.component';
import { ModalConfirmComponent } from './components/modal-confirm/modal-confirm.component';
import { AuthModule } from '../auth/auth.module';
import { MsgErrorFormDirective } from '../core/directives/msg-error-form.directive';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    AdvertisingComponent,
    FriendRequestsComponent,
    FooterComponent,
    MoreFeaturesComponent,
    ChatComponent,
    PresentationComponent,
    MsgErrorFormDirective,
    RandomDateDirective,
    ModalAlertComponent,
    ModalConfirmComponent,
  ],
  imports: [CommonModule,RouterModule],
  exports: [
    AuthModule,
    HeaderComponent,
    NavbarComponent,
    AdvertisingComponent,
    FriendRequestsComponent,
    FooterComponent,
    MoreFeaturesComponent,
    ChatComponent,
    PresentationComponent,
    RandomDateDirective,    
    MsgErrorFormDirective,
    ModalAlertComponent,
    ModalConfirmComponent,
  ],
})
export class SharedModule {}
