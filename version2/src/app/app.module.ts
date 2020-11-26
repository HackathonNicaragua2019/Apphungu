import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from "@angular/fire/auth";

import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { SharedComponentsModule } from './components/shared-components.module';

import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
     AppRoutingModule,
     AngularFireModule.initializeApp(environment.firebaseConfig),
     AngularFirestoreModule,
     AngularFireAuthModule,
     SharedComponentsModule
    ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SpeechRecognition,
    ScreenOrientation
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
