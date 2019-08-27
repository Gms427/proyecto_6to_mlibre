import { Component, OnInit } from '@angular/core';
import { LoginService } from "src/app/shared/services/login.service";
import { Router } from '@angular/router';
import { SearchService } from 'src/app/shared/services/search.service';
import { PublicationList } from '../../models/publicationList'
import { GeneralService } from 'src/app/shared/services/general.service';
import { Filter, Category, Subcategory, Currencies } from 'src/app/shared/utils/types';
import { PublicationService } from 'src/app/shared/services/publication.service';

@Component({
  selector: 'app-publication-list',
  templateUrl: './publication-list.component.html',
  styleUrls: ['./publication-list.component.css']
})
export class PublicationListComponent implements OnInit{

  public currenciesEnum = Currencies
  
  public search: string;
  filtersInfo: Filter[];
  public categorySearched: Category;
  public subcategorySearched: Subcategory;

  public showSpinner: boolean = false;

  public Publications: PublicationList[] = [];
  length = this.Publications.length;
  pageSize = 10;
  public added: boolean = false;
  pageSizeOptions: number[] = [5, 10, 25];
  selected: string = "option3";


  constructor(private loginService: LoginService,
              private router: Router,
              private _searchService: SearchService,
              private _generalService: GeneralService,
              private _publicationService: PublicationService) {}

  async ngOnInit(){
    // service para obtener la búsqueda
    console.log(this.Publications);
    this.getSearch();

    this._searchService.search.subscribe(async (value) => { 
      this.getSearch();
    });

    this.categorySearched = this._searchService.getCategorySearched();
    this.subcategorySearched = this._searchService.getSubcategorySearched();
    this.filtersInfo = await this._generalService.getFiltersInfo();    
  }

  addFav(product) {
    product.favorite = true;
  }

  removeFav(product) {
    product.favorite = false;
  }

  navegateToProduct(product) {
    this.router.navigate([`/publications/publication/${product.Id}`]);
  }

  onFiltersChange(event){
    this.showSpinner = event;
  }

  async getSearch(){
    this.showSpinner = true;
    this.search = this._searchService.getSearchValue();
    console.log('this.search: ', this.search);
      if(this.search !== undefined && this.search !== ""){
        console.log('getProducts');
        this.Publications = await this._publicationService.getProducts(this.search);
      }else{
        console.log('getAllProducts');
        this.Publications = await this._publicationService.getAllProducts();
      }
      setTimeout(() => {
        this.showSpinner = false;
      }, 500);
      
  }
}
