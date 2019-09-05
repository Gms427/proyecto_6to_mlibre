import { Injectable, Output, EventEmitter } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Category, Subcategory } from '../utils/types';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchValue: string = "";
  private categorySearched: Category;
  private subcategorySearched: Subcategory;

  @Output() search: EventEmitter<string> = new EventEmitter();

  constructor() { }

  getSearchValue(): string{
    return this.searchValue;
  }

  setSearchValue(value: string){
    this.searchValue = value;
  }

  getCategorySearched(): Category{
    return this.categorySearched;
  }

  setCategorySearched(value: Category){
    this.categorySearched = value;
  }

  getSubcategorySearched(): Subcategory{
    return this.subcategorySearched;
  }

  setSubcategorySearched(value: Subcategory){
    this.subcategorySearched = value;
  }

  Search(value: string){
    this.setSearchValue(value);
    this.search.emit(value);
  }
  
}
