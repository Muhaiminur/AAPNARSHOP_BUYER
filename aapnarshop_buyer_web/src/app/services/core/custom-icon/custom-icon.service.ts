import { Injectable, OnInit } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material/icon";

@Injectable({
  providedIn: 'root'
})
export class CustomIconService {
  path = './../assets/icons/social/';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) { }

load() {
  
  //Social 
  this.matIconRegistry.addSvgIcon("facebook", this.domSanitizer.bypassSecurityTrustResourceUrl(this.path + 'facebook.svg'));
  this.matIconRegistry.addSvgIcon("facebook-round", this.domSanitizer.bypassSecurityTrustResourceUrl(this.path + 'facebook-round.svg'));
  this.matIconRegistry.addSvgIcon("google", this.domSanitizer.bypassSecurityTrustResourceUrl(this.path + 'google.svg'));
  this.matIconRegistry.addSvgIcon("instagram", this.domSanitizer.bypassSecurityTrustResourceUrl(this.path + 'instagram.svg'));
  this.matIconRegistry.addSvgIcon("twitter", this.domSanitizer.bypassSecurityTrustResourceUrl(this.path + 'twitter.svg'));
  this.matIconRegistry.addSvgIcon("whatsapp", this.domSanitizer.bypassSecurityTrustResourceUrl(this.path + 'whatsapp.svg'));
  } 
}
