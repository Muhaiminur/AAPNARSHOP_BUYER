import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-holder',
  templateUrl: './holder.component.html',
  styleUrls: ['./holder.component.css']
})
export class HolderComponent implements OnInit {

  pageState: any;
  matTabIndex: number = 3;
  
  constructor(private _Activatedroute:ActivatedRoute) { }

  ngOnInit() {
    this._Activatedroute.data.subscribe(data => {
      this.pageState = data;
    });
    if (this.pageState.page){
      this.matTabIndex = this.pageState.page;
    } 
  }

  newMatIndex = (tabChangeEvent: MatTabChangeEvent): void => {
    this.matTabIndex = tabChangeEvent.index;
  }

}
