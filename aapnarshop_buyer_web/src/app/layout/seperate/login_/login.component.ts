import { Component, OnInit } from '@angular/core';
import { LanguageService } from './../../../services/shared/language/language.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  _signin: any;

  constructor(private languageService: LanguageService) {
    this._signin = this.languageService.loadLanguageConfig('signin');
  }

  ngOnInit(){ }

}
