import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  typesOfShoes: string[] = ['All', 'Grocery Shop', 'Pharmacy', 'Restaurant', 'Sneakers Shop'];

  constructor() { }

  ngOnInit(): void {
  }

}
