import { Component, OnInit } from '@angular/core';
import { LoginService } from "src/app/shared/services/login.service";
import { Router } from '@angular/router';
import { SearchService } from 'src/app/shared/services/search.service';
import { PublicationList } from '../../models/publicationList'
import { GeneralService } from 'src/app/shared/services/general.service';
import { Filter, Category, Subcategory, Currencies, Publication } from 'src/app/shared/utils/types';
import { PublicationService } from 'src/app/shared/services/publication.service';

@Component({
  selector: 'app-publication-list',
  templateUrl: './publication-list.component.html',
  styleUrls: ['./publication-list.component.css']
})
export class PublicationListComponent implements OnInit{

  public currenciesEnum = Currencies
  
  public search: string;
  public filtersInfo: Filter[];
  public categorySearched: Category;
  public subcategorySearched: Subcategory;

  public activeFilters: Filter[];


  public showSpinner: boolean = false;

  public allPublications: Publication[] = [];
  public Publications: Publication[] = [];

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

  spinnerChange(event){
    this.showSpinner = event;
  }

  async getSearch(){
    this.showSpinner = true;
    this.search = this._searchService.getSearchValue();
    console.log('this.search: ', this.search);

      if(this.search !== undefined && this.search !== ""){
        console.log('getProducts');
        this.Publications = await this._publicationService.getProducts(this.search);
        this.allPublications = this.Publications;
      }else{
        console.log('getAllProducts');
        this.Publications = await this._publicationService.getAllProducts();
        this.allPublications = this.Publications;
      }
      setTimeout(() => {
        this.showSpinner = false;
      }, 500);
      console.log('Publications: ', this.Publications);
  }

  onFiltersChange(event){
    console.log("Filters info plist: ",event);

    // TODO: Matchear cada filtro con una property de las Publications para poder filtrar, ver de configurar por bd a qué property
    // corresponde cada filtro, meter en el columnName o algo columna nueva tipo property_name

    this.activeFilters = event;

    /*this.activeFilters.forEach(f => {
      console.log(`${f.ColumnName} == ${f.Values}`);
    });*/

    this.Publications = this.allPublications.filter(p => {
      return this.applyFilters(p);
    });

  }

  applyFilters(publication: Publication){

    let res = true;
    this.activeFilters.forEach(f => {

      if(f.ColumnName === 'Price'){
        let min = f.Values[0];
        let max = f.Values[1];

        if(min != "" && min != undefined && max != "" && max != undefined){ // Min y max
          res = res && parseInt(publication[f.ColumnName]) > parseInt(min) && parseInt(publication[f.ColumnName]) < parseInt(max);
        }else if(min === "" || min == undefined && (max != "" && max != undefined)){ // No min
          res = res && parseInt(publication[f.ColumnName]) < parseInt(max);
        }else if(max === "" || max == undefined && (min != "" && min != undefined)){ // No max
          res = res && parseInt(publication[f.ColumnName]) > parseInt(min);
        }else{ // Ni min ni max
          res = res && true;
        }
        
      }else if(f.Type === 'BOOLEAN'){
        res = res && f.Values[0] === publication[f.ColumnName]; 
      }else{
        res = res && f.Values === publication[f.ColumnName];
      }    

    });

    console.log(res);
    return res;
  }
}
