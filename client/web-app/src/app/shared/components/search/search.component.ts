import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public searchValue: string;

  constructor(private router: Router,
              private _searchService: SearchService) { }

  ngOnInit() {
  }

  search() {
    this._searchService.setSearchValue(this.searchValue);
    this._searchService.search.emit(this.searchValue);
    this.router.navigate(["/publications/list"]);
  }
}
