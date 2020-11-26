import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpBackend } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  localStorage: any;
  _appConfig: any;

  private httpClient: HttpClient;

  constructor(private handler: HttpBackend) { }
  /*
    HttpBackend doesn't wake interceptor, hence used here but HttpClient does
  */

  
  async loadAppConfig(){
    this.httpClient = new HttpClient(this.handler);
    return await this.httpClient
    .get('/assets/config/config.json')
    .toPromise()
    .then((result: any) => {
      this._appConfig = result;
    })
    .catch((error: HttpErrorResponse ) => {
      this._appConfig = '';
      console.error(error);
    });
  }

/*
  async loadAppConfig(){
    this.httpClient = new HttpClient(this.handler);
    let _promise = new Promise((resolve, reject) => {
      this.httpClient.get('/assets/config/config.json')
      .toPromise()
      .then(result => {
        this._appConfig = result;
        resolve(result);
      }).catch(error => {
        this._appConfig = '';
        reject(error);
        console.error(error);
      });
    }); 
    return _promise;
  }
*/
  getServerUrl(): string {
    return this._appConfig.uri;
  }

  getServerUsername(): string{
    return this._appConfig.username;
  }

  getServerPassword(): string{
    return this._appConfig.password;
  }

  getServerDefaultLang(): string{
    return this._appConfig.default_language;
  }

  getServerDefaultName(): string{
    return this._appConfig.default_name;
  }

  getServerDefaultEmail(): string{
    return this._appConfig.default_email;
  }

  getServerDefaultMobile(): string{
    return this._appConfig.default_mobile;
  }

  getServerDefaultUserId(): string{
    return this._appConfig.default_userId;
  }

  getServerDefaultProfilePic(): any{
    return this._appConfig.default_profile_pic;
  }

  getClientData(_input:any){
    var result = '';
    if (localStorage.getItem('eshops_buyer') !== null) {
      let eshops_vars = localStorage.getItem('eshops_buyer'); 
      let eshops = JSON.parse(eshops_vars);
      Object.keys(eshops).forEach(key=>{
        if (key == _input){ 
          result = eshops[_input];
        } 
      });
    } else {
      result = '';
      console.error('Local Storage Not Found');
    }
    return result;
  }

  setClientData(_user: any, _email: any, _phone: any, _ln: any, _userId: any, _proPic: any){
    let eshops_vars = {
      username: _user, 
      email: _email,
      phone: _phone,
      ln: _ln,
      userid: _userId,
      propic: _proPic
    };
    localStorage.setItem('eshops_buyer',JSON.stringify(eshops_vars));
  }

  setClientDataSingle(_item: any, _newVal :any){
    if (localStorage.getItem('eshops_buyer') !== null) {
      let eshops_vars = localStorage.getItem('eshops_buyer'); 
      let eshops = JSON.parse(eshops_vars);
      Object.keys(eshops).forEach(key=>{
        if (key == _item){
          eshops[key] = _newVal;
        }
      });
      localStorage.setItem('eshops_buyer',JSON.stringify(eshops));
      window.location.reload();
    }
  }
}
