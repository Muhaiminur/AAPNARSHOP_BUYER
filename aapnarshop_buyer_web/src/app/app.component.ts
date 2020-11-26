import { Component, OnInit } from '@angular/core';
import { CustomIconService } from './services/core/custom-icon/custom-icon.service';
import { ConfigService } from './services/core/config/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'eshops';
  data: any;

  constructor(
    private customIconService: CustomIconService,
    private configService: ConfigService){}

  ngOnInit() {
    /* Loading Custom Icons */ 
    this.customIconService.load();
    
    /* Set Default Client Data if not found earlier */ 
    if (!this.configService.getClientData('ln')){
      this.configService.setClientData(
        this.configService.getServerDefaultName(),
        this.configService.getServerDefaultEmail(),
        this.configService.getServerDefaultMobile(),
        this.configService.getServerDefaultLang(),
        this.configService.getServerDefaultUserId(),
        this.configService.getServerDefaultProfilePic()
        ); 
    }

  }
}
