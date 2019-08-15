import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../../utils/types';

@Component({
  selector: 'app-categories-menu',
  templateUrl: './categories-menu.component.html',
  styleUrls: ['./categories-menu.component.css']
})
export class CategoriesMenuComponent implements OnInit {

  @Input()
  categories: Category[];

  constructor() { }

  ngOnInit() {
  }

}
