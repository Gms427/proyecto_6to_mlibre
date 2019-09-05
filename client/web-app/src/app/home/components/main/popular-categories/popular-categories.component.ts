import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/shared/utils/types';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/shared/services/search.service';

@Component({
  selector: 'app-popular-categories',
  templateUrl: './popular-categories.component.html',
  styleUrls: ['./popular-categories.component.css']
})
export class PopularCategoriesComponent implements OnInit {
  
  @Input()
  public categories

  constructor(private router: Router,
              private _searchService: SearchService) { }

  ngOnInit() {
  }

  test(){
    console.log("Categories in pop.cats", this.categories);
  }

  navigateToCategory(category: Category){
    console.log(`navegando a ${category.Name}`);
    this._searchService.setCategorySearched(category);
    this.router.navigate(['/publications/list']);
  }
}
