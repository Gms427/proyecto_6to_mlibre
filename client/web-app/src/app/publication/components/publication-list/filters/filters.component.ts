import { Component, OnInit, Input, AfterViewInit, Output } from '@angular/core';
import { Filter } from 'src/app/shared/utils/types';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit, AfterViewInit {

  @Input()
  filtersInfo: Filter[];

  @Output() spinner: EventEmitter<boolean> = new EventEmitter();

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
    this.spinner.emit(true);
    setTimeout(() => {
      this.spinner.emit(false);
    }, 1000);
  }

}
