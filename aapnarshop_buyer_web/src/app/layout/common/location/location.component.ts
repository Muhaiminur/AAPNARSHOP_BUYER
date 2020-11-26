import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ApiHandlerService } from './../../../services/shared/api-handler/api-handler.service';
import { LanguageService } from './../../../services/shared/language/language.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  _city: any; _area: any; _searchbox: any;
  citys: any; areas: any;

  constructor(
    private apiHandlerService: ApiHandlerService, 
    private lang: LanguageService) {
      this._city = this.lang.loadLanguageConfig('city');
      this._area = this.lang.loadLanguageConfig('area');
      this._searchbox = this.lang.loadLanguageConfig('searchbox');
    }

    locationFinderForm = new FormGroup({
      citysFormCtl: new FormControl('', [
        Validators.required
      ]),
      areasFormCtl: new FormControl('',[
        Validators.required
      ])
    });

  ngOnInit(): void {
    this.getCityList();
  }

  async getCityList(): Promise<void>{
    let disid = 2;
    var body = {"districtId": disid};
    let promise = await this.apiHandlerService.executeEndPoint('listcity', body);
    let citys = JSON.parse(JSON.stringify(promise));
    if (citys.code === 200){
      this.citys = citys.data;
    } else {
      //call dialog service & show the error
    }
  }

  async getAreas(cityid: any): Promise<void>{
    var body = {"cityId": cityid};
    let promise = await this.apiHandlerService.executeEndPoint('listarea', body);
    let areas = JSON.parse(JSON.stringify(promise));
    if (areas.code === 200){
      this.areas = areas.data;
    } else {
      //call dialog service & show the error
    }
  }

  onSubmit(): void{
    alert('Submitted');
  }


}
