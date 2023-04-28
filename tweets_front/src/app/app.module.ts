import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PosttwitterComponent } from './posttwitter/posttwitter.component';
import { HomeComponent } from './home/home.component';
import { VertweetComponent } from './vertweet/vertweet.component';

@NgModule({
  declarations: [
    AppComponent,
    PosttwitterComponent,
    HomeComponent,
    VertweetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
