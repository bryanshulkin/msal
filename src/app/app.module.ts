import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";

import { MsalModule, MsalRedirectComponent } from '@azure/msal-angular';
import { PublicClientApplication } from '@azure/msal-browser';

const isIE = 
 window.navigator.userAgent.indexOf("MSIE ") > -1 ||
 window.navigator.userAgent.indexOf("Trident/") >-1;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatListModule,
    MsalModule.forRoot(
      new PublicClientApplication({
        auth: {
          clientId: "6e25ad4f-0776-4c19-81b8-089d9a9431de",
          authority: "https://login.microsoftonline.com/6fbd4923-c384-4867-b9ec-1a1da254ad7f",
          redirectUri: "http://localhost:4200"
        },
        cache: {
          cacheLocation: "localStorage",
          storeAuthStateInCookie: isIE,
        },
      }), 
      null,
      null
    )
  ],
  providers: [],
  bootstrap: [AppComponent, MsalRedirectComponent]
})
export class AppModule { }
