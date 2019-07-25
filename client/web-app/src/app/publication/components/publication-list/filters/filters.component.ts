import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Filter } from 'src/app/shared/utils/types';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit, AfterViewInit {

  @Input()
  filtersInfo: Filter[];

  constructor() { }

  ngOnInit() {
    console.log(this.filtersInfo);
  }

  ngAfterViewInit(){
    console.log(this.filtersInfo);
  }

  Test(){
    console.log(this.filtersInfo);
    this.filtersInfo.forEach((f) => {
      console.log(f.Name, f.Values);
    });
  }

}
