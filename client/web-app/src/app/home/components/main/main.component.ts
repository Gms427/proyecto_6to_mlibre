import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public categories: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.categories = [{
      label: 'Categories',
      items: [{ label: 'Cat 1' }, { label: 'Cat 2' }, { label: 'Cat 3' }, ]
    }]
  }
}
