import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {  HttpClientModule } from '@angular/common/http';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

import {  Facebook } from '@ionic-native/facebook/ngx';
import { AutosizeModule } from 'ngx-autosize';

import { FacebookModule } from 'ngx-facebook';

const config = {
  apiKey: "AIzaSyBlIRZQphCH9czYQzvMbX9uY-my6vIyLnQ",
  authDomain: "chatbot-45bf7.firebaseapp.com",
  databaseURL: "https://chatbot-45bf7.firebaseio.com",
  projectId: "chatbot-45bf7",
  storageBucket: "chatbot-45bf7.appspot.com",
  messagingSenderId: "464109394549",
  appId: "1:464109394549:web:01089dc4e05b5c7a"
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
            IonicModule.forRoot(),
            AppRoutingModule,
            HttpClientModule,
            FacebookModule.forRoot()
          ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    File,
    FileOpener,
    SocialSharing,
    Facebook,
    AutosizeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
