import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/shared/utils/types';

@Component({
  selector: 'app-popular-categories',
  templateUrl: './popular-categories.component.html',
  styleUrls: ['./popular-categories.component.css']
})
export class PopularCategoriesComponent implements OnInit {
  
  @Input()
  public categories

  constructor() { }

  ngOnInit() {
  }

  test(){
    console.log("Categories in pop.cats", this.categories);
  }

  navigateToCategory(category: Category){
    console.log(`navegando a ${category.CategoryName}`);
  }
}
