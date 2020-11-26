import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormControlName } from '@angular/forms';
import { LanguageService } from './../../../services/shared/language/language.service';
import { AuthService } from './../../../services/core/auth/auth.service';

@Component({
  selector: 'app-signer',
  templateUrl: './signer.component.html',
  styleUrls: ['./signer.component.css']
})
export class SignerComponent implements OnInit {
  
  _signin: any; _signup: any; _phoneoremail: any; _password: any; _otp: any; _required: any;
  hide = true;
  show:boolean = false;
  regForm: FormGroup;
  signinForm: FormGroup;
  message: number;

  constructor(
    private languageService: LanguageService,
    private authService: AuthService
    ) { 
    this._signin = this.languageService.loadLanguageConfig('signin');
    this._signup = this.languageService.loadLanguageConfig('signup');
    this._phoneoremail = this.languageService.loadLanguageConfig('phoneoremail');
    this._password = this.languageService.loadLanguageConfig('password');
    this._otp = this.languageService.loadLanguageConfig('otp');
    this._required = this.languageService.loadLanguageConfig('required');
  }

  ngOnInit(): void {
    /* Form validation */
    this.regForm = new FormGroup({
      usernameRegFormControl: new FormControl('', [
        Validators.required
      ]),
      otpRegFormControl: new FormControl('', [
        Validators.required
      ])
    });
    
    this.signinForm = new FormGroup({
      usernameSigninFormControl: new FormControl('', [
        Validators.required
      ]),
      passwordSigninFormControl: new FormControl('', [
        Validators.required
      ])
    });
  }

  /* Fetch Values */
  get usernameSigninFormControl(){
    return this.signinForm.get('usernameSigninFormControl') as FormControl;
  }

  get passwordSigninFormControl(){
    return this.signinForm.get('passwordSigninFormControl') as FormControl;
  }

  get usernameRegFormControl(){
    return this.regForm.get('usernameRegFormControl') as FormControl;
  }
  get otpRegFormControl(){
    return this.regForm.get('otpRegFormControl') as FormControl;
  }

  // Signin
  signinFormSubmit(): void{
    if(this.signinForm.valid) { 
      this.authService.signin(this.usernameSigninFormControl.value, this.passwordSigninFormControl.value);
    }
  }

  // Send OTP
  async sendUserName(): Promise<any>{
    this.message = await this.authService.reg_send_otp(this.usernameRegFormControl.value);
    if (this.message === 200){
      this.show = true;
      console.log(this.message);
    }
  }

  regFormSubmit():void{
    //later
  }
}
