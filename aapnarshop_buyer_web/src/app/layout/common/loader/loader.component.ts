import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from './../../../services/core/loader/loader.service';
import { LoaderInterface } from './loader-interface';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  show = false;
  private subscription: Subscription;

  constructor(private loaderService: LoaderService) { }

  ngOnInit(): void {
    setTimeout(() => {
    this.subscription = this.loaderService.loaderState
      .subscribe((state: LoaderInterface) => {
        this.show = state.show;
        //this.percentage = state.percentage;
      });
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
