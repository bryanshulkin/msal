import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { BrowserUtils } from '@azure/msal-browser';

const routes: Routes = [
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "",
    component: HomeComponent
  }
];

const isIframe = window !== window.parent && !window.opener;

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    initialNavigation:
      !BrowserUtils.isInIframe() && !BrowserUtils.isInPopup()
      ? "enabledNonBlocking"
      : "disabled"

  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
