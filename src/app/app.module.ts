import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { PostsModule } from './posts/posts.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    CommonModule,
    BrowserModule,

    FormsModule,
    ReactiveFormsModule,

    AppRoutingModule,
    AuthModule,
    PostsModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
