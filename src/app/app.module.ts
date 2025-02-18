import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';

import { environment } from 'src/environments/environment';

import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp({ projectId: "portafolio2025-duckinsdutries", appId: "1:1044741923147:web:b434d42052293f2a8848ce", storageBucket: "portafolio2025-duckinsdutries.firebasestorage.app", apiKey: "AIzaSyAlyClpEXp6h12h8Of9RgU-RK6ki8WO0K0", authDomain: "portafolio2025-duckinsdutries.firebaseapp.com", messagingSenderId: "1044741923147", measurementId: "G-NL756WEVMS" }),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideFirebaseApp(() => initializeApp({ projectId: "portafolio2025-duckinsdutries", appId: "1:1044741923147:web:b434d42052293f2a8848ce", storageBucket: "portafolio2025-duckinsdutries.firebasestorage.app", apiKey: "AIzaSyAlyClpEXp6h12h8Of9RgU-RK6ki8WO0K0", authDomain: "portafolio2025-duckinsdutries.firebaseapp.com", messagingSenderId: "1044741923147", measurementId: "G-NL756WEVMS" })),
     provideAuth(() => getAuth()), provideAnalytics(() => getAnalytics()), ScreenTrackingService, UserTrackingService, provideFirestore(() => getFirestore()), provideStorage(() => getStorage())],
  bootstrap: [AppComponent],
})
export class AppModule {}
