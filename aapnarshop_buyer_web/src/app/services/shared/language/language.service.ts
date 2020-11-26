import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ConfigService } from './../../core/config/config.service';

@Injectable({
  providedIn: 'root'
})

export class LanguageService {

  _languageConfig: any;
  _languageType: any;

  constructor(
    private httpClient: HttpClient,
    private config: ConfigService) {}

    /*
    async loadLanguageConfig(_input: any){
      let res: any;
      let _languageType = this.config.getClientData('ln');
      let _promise = new Promise((resolve, reject) => {
        this.httpClient.get('/assets/language/language.json')
        .toPromise()
        .then(result => {
          Object.keys(result).forEach(key=>{
            if (key == _input){ 
              if (_languageType == 'BN'){
                res = `<font face='Solaimanlipi'>` + result[key][_languageType] + `</font>`;
              } else {
                res = result[key][_languageType];
              }
            }
            resolve(res);
          });
        }).catch(error => {
          reject(error);
          console.error(error);
        });
        return _promise;
      });
    }
*/

  async loadLanguageConfig(_input: any){
    var res = '';
    this._languageType = this.config.getClientData('ln');
    this._languageConfig = await this.httpClient
      .get('/assets/language/language.json')
      .toPromise()
      .then((result: any) => {
        Object.keys(result).forEach(key=>{
          if (key == _input){ 
            if (this._languageType == 'BN'){
              res = `<font face='Solaimanlipi'>` + result[key][this._languageType] + `</font>`;
            } else {
              res = result[key][this._languageType];
            }
          }
        });
      })
      .catch((error: HttpErrorResponse ) => {
        console.error(error);
      });
      return res;
  }  

  public getCurrentLanguage(): any{
    let currentLang = this.config.getClientData('ln');
    if (currentLang === 'BN'){
      return 'EN';
    } else {
      return 'BN';
    }
  }

  public setCurrentLanguage(): void{
    let currentLang = this.config.getClientData('ln');
    if (currentLang === 'BN'){
      this.config.setClientDataSingle('ln', 'EN');
    } else {
      this.config.setClientDataSingle('ln', 'BN');
    }
  }
}