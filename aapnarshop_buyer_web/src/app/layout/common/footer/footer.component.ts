import { Component, OnInit } from '@angular/core';
import { LanguageService } from './../../../services/shared/language/language.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  _about: any; _aboutus: any; _delivery: any; _exchange: any; _privacy:any;
  _info: any; _sizeguide:any; _storelocator: any;
  _customersupport: any; _phone: any; _timing: any; _headofcadd: any; _corofcadd: any;
  _followus: any;
  _currentYear: any; _copyright:any;

  constructor(private languageService: LanguageService) { }

  ngOnInit(){
    /* About */
    this._about = this.languageService.loadLanguageConfig('about');
    this._aboutus = this.languageService.loadLanguageConfig('about_us');
    this._delivery = this.languageService.loadLanguageConfig('delivery');
    this._exchange = this.languageService.loadLanguageConfig('exchange');
    this._privacy = this.languageService.loadLanguageConfig('privacy');

    /* Information */
    this._info = this.languageService.loadLanguageConfig('info');
    this._sizeguide = this.languageService.loadLanguageConfig('sizeguide');
    this._storelocator = this.languageService.loadLanguageConfig('storelocator');

    /* Customer Support */ 
    this._customersupport = this.languageService.loadLanguageConfig('customersupport');
    this._phone = this.languageService.loadLanguageConfig('phone');
    this._timing = this.languageService.loadLanguageConfig('timing');
    this._headofcadd = this.languageService.loadLanguageConfig('headofcadd');
    this._corofcadd = this.languageService.loadLanguageConfig('corofcadd');

    /* Copyright */
    this._currentYear = (new Date()).getFullYear();
    this._copyright = this.languageService.loadLanguageConfig('copyright');

    /* Follow Us */
    this._followus = this.languageService.loadLanguageConfig('followus');
    
  }

 
}
