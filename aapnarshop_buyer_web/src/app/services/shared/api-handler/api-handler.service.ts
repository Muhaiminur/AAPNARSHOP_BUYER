import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './../../core/config/config.service';

@Injectable({
  providedIn: 'root'
})
export class ApiHandlerService {

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService) { }

    async executeEndPoint(_endpointTitle: any, _body: object){
      var _uri: any; 
      var _output: any;
      let _promise = new Promise((resolve, reject) => {
        this.httpClient.get('/assets/endpoints/endpoints.json')
        .toPromise()
        .then(
          result => { 
            Object.keys(result).forEach(key=>{
              if (key == _endpointTitle){ 
                var _host = this.configService.getServerUrl();
                _uri = _host + result[key];
                this.httpClient.post(_uri,
                  JSON.stringify(_body)
                )
                .toPromise()
                .then(
                  res => {
                    _output = res; 
                    resolve(res);
                    //console.log(_output);
                  }).catch(err =>{
                    reject(err);
                    console.error(err);
                })
              } 
            });
          }).catch(error => {
            _output = '';
            reject(error);
            console.error(error);
        });
      });
      return _promise;
    }

}
