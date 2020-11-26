import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

/* Components - Shared */
import { HeaderComponent } from './../../layout/common/header/header.component'; 
import { FooterComponent } from './../../layout/common/footer/footer.component'; 
import { BodyComponent } from './../../layout/common/body/body.component'; 
import { LoaderComponent } from './../../layout/common/loader/loader.component'; 
import { HolderComponent } from './../../layout/common/holder/holder.component';

/* Components - Pages */
import { HomeComponent } from './../../layout/seperate/home/home.component';
import { StoreComponent } from './../../layout/seperate/store/store.component';
import { MycartComponent } from './../../layout/seperate/mycart/mycart.component';
import { DashboardComponent } from './../../layout/seperate/dashboard/dashboard.component';
import { HistoryComponent } from './../../layout/seperate/history/history.component';
import { NoticeComponent } from './../../layout/seperate/notice/notice.component';
import { ProfileComponent } from './../../layout/seperate/profile/profile.component';
import { SettingsComponent } from './../../layout/seperate/settings/settings.component';

import { LocationComponent } from './../../layout/common/location/location.component';
import { FilterComponent } from './../../layout/common/filter/filter.component';
import { SignerComponent } from './../../layout/seperate/signer/signer.component';

import { PageNotFoundComponent } from './../../layout/seperate/page-not-found/page-not-found.component';
import { LogoutComponent } from './../../layout/seperate/logout/logout.component';

/* Componets - Footer */
import { AboutUsComponent } from './../../layout/seperate/about-us/about-us.component';
import { ExchangePolicyComponent } from './../../layout/seperate/exchange-policy/exchange-policy.component';
import { PrivacyPolicyComponent } from './../../layout/seperate/privacy-policy/privacy-policy.component';
import { DeliveryInformationComponent } from './../../layout/seperate/delivery-information/delivery-information.component';

/* Authguard */
import { AuthGuard } from './../../guards/auth/auth.guard';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'store/:id', component: StoreComponent },
  { path: 'cart', component: MycartComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'history', component: HolderComponent, data: { page: '1' }, canActivate: [AuthGuard]},
  { path: 'notice', component: HolderComponent, data: { page: '2' }, canActivate: [AuthGuard]},
  { path: 'profile', component: HolderComponent, data: { page: '3'}, canActivate: [AuthGuard]},
  { path: 'settings', component: HolderComponent, data: { page: '0' }, canActivate: [AuthGuard]},
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard]},
  
  // Footer 
  { path: 'about', component: AboutUsComponent },
  { path: 'delivery', component: DeliveryInformationComponent },
  { path: 'exchange', component: ExchangePolicyComponent },
  { path: 'privacy', component: PrivacyPolicyComponent },

  // Fail-safe redirection
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

// https://www.tektutorialshub.com/angular/angular-pass-data-to-route/

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes//,
      //{ enableTracing: true } // <-- debugging purposes only
      )
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
export const RouitngPathComponents = [
  HeaderComponent,
  FooterComponent,
  BodyComponent,
  LoaderComponent, 
  HolderComponent,
  HomeComponent,
  StoreComponent,
  MycartComponent,
  DashboardComponent,
  HistoryComponent,
  NoticeComponent,
  ProfileComponent,
  SettingsComponent,
  LocationComponent,
  FilterComponent,
  SignerComponent,
  LogoutComponent,

  AboutUsComponent,
  ExchangePolicyComponent,
  DeliveryInformationComponent,
  PageNotFoundComponent
]