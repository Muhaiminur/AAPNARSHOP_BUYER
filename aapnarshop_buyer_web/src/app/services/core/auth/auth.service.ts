import { Injectable, resolveForwardRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiHandlerService } from './../../shared/api-handler/api-handler.service';
import { DialogService } from './../../shared/dialog/dialog.service';
import { ConfigService } from './../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private apiHandlerService: ApiHandlerService,
    private dialogService: DialogService,
    private configService: ConfigService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  async signin(username: any, password: any): Promise<void> {
    var body = {"via": username, "password": password};
    let promise = await this.apiHandlerService.executeEndPoint('login', body);
    let inbound = JSON.parse(JSON.stringify(promise));
    if (inbound.code === 200){
      // Set user specific information
      let uId = inbound.data.id;
      let uName = inbound.data.fullName;
      let uEmail = inbound.data.email;
      let uPhone = inbound.data.phone;
      let uProPic = inbound.data.profilePicture;
      this.configService.setClientData(uName, uEmail, uPhone, this.configService.getServerDefaultLang(), uId, uProPic);
      
      // Redirect to revious page 
      //let returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
      //this.router.navigate([returnUrl]);
      window.location.reload();
    } else {
      const options = {
        textTitle: 'লক্ষ্য করুন',
        textBody: inbound.data,
        textCancel: 'না',
        textConfirm: 'ঠিক আছে'
      };
      this.dialogService.open(options);
    }
  }

  async reg_send_otp(username: any): Promise<any>{
    var body = {"via": username};
    let promise = await this.apiHandlerService.executeEndPoint('registration_sendotp', body);
    let inbound = JSON.parse(JSON.stringify(promise));
    if (inbound.code === 200){
      return inbound.code;
    } else {
      //call dialog service & show the error
      const options = {
        textTitle: 'লক্ষ্য করুন',
        textBody: inbound.data,
        textCancel: 'না',
        textConfirm: 'ঠিক আছে'
      };
      this.dialogService.open(options);
      return;
    }
  }

  public currentUserId(): any {
    if (this.configService.getClientData('userid') !== '8800000000000'){
      return true;
    }
  }

  public logout(): void {
    localStorage.clear(); 
    this.router.navigate(['/']);
    window.location.reload();
  }
}
