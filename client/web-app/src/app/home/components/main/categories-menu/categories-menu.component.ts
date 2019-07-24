import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../../../../shared/utils/types';

@Component({
  selector: 'app-categories-menu',
  templateUrl: './categories-menu.component.html',
  styleUrls: ['./categories-menu.component.css']
})
export class CategoriesMenuComponent implements OnInit {

  @Input()
  Categories: Category[];

  constructor() { }

  ngOnInit() {
  }

}
