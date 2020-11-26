import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from './../../services/core/config/config.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  
  userID: any;

  constructor(
    private configService: ConfigService
  ) {}

  intercept(
    request: HttpRequest<unknown>, 
    next: HttpHandler): Observable<HttpEvent<unknown>> {
      var authUser = this.configService.getServerUsername();
      var authPwd = this.configService.getServerPassword();
      this.userID = this.configService.getClientData('userid');
      var lang = this.configService.getClientData('ln');

      const modified = request.clone({ 
        setHeaders: { 
          "Access-Control-Allow-Origin" : "*",
          "Authorization" : "Basic " + btoa(authUser +":"+ authPwd),
          "Content-Type" : "application/json;charset=UTF-8",
          "userId" : this.userID,
          "token" : "fake-fcm-token-from-buyer-web",
          "language" : lang
        } 
      });
    return next.handle(modified);
  }
}
