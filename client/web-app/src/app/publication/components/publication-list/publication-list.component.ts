import { Component, OnInit } from '@angular/core';
import { LoginService } from "src/app/shared/services/login.service";
import { Router } from '@angular/router';
import { SearchService } from 'src/app/shared/services/search.service';
import {PublicationList} from '../../models/publicationList'
import { GeneralService } from 'src/app/shared/services/general.service';
import { Filter, Category, Subcategory } from 'src/app/shared/utils/types';


@Component({
  selector: 'app-publication-list',
  templateUrl: './publication-list.component.html',
  styleUrls: ['./publication-list.component.css']
})
export class PublicationListComponent implements OnInit{
  public search: string;
  filtersInfo: Filter[];
  public categorySearched: Category;
  public subcategorySearched: Subcategory;

  public showSpinner: boolean = false;

  public Publications: PublicationList[] = [
    {
      Id: 1,
      Name: "Chevrolet Celta 1.0 full",
      Price: "U$S 7.450",
      State: true,
      Shipping: true,
      Favorite: false,
      Img:
        "https://mlstaticquic-a.akamaihd.net/iphone-7-plus-32gb-original-recertificado-regalo-futuro21-D_NP_938282-MLU30746149274_052019-X.webp"
    },
    {
      Id: 2,
      Name: "Chevrolet Celta 1.0 full",
      Price: "U$S 7.450",
      State: false,
      Shipping: false,
      Favorite: false,
      Img:
        "https://mlstaticquic-a.akamaihd.net/iphone-7-plus-128-gb-refurbished-macrotec-D_NP_929296-MLU29526633106_022019-X.webp"
    },
    {
      Id: 3,
      Name: "Chevrolet Celta 1.0 full",
      Price: "U$S 7.450",
      State: false,
      Shipping: true,
      Favorite: false,
      Img:
        "https://mlstaticquic-a.akamaihd.net/iphone-7-plus-32gb-original-recertificado-regalo-futuro21-D_NP_938282-MLU30746149274_052019-X.webp"
    }
  ];
  length = this.Publications.length;
  pageSize = 10;
  public added: boolean = false;
  pageSizeOptions: number[] = [5, 10, 25];
  selected: string = "option3";


  constructor(private loginService: LoginService,
              private router: Router,
              private _searchService: SearchService,
              private _generalService: GeneralService) {}

  async ngOnInit(){
    // service para obtener la búsqueda
    this.search = this._searchService.getSearchValue();
    this.categorySearched = this._searchService.getCategorySearched();
    console.log(this.categorySearched);
    this.subcategorySearched = this._searchService.getSubcategorySearched();
    this.filtersInfo = await this._generalService.getFiltersInfo();
    console.log(this.filtersInfo);
    
  }

  addFav(product) {
    product.favorite = true;
  }

  removeFav(product) {
    product.favorite = false;
  }

  navegateToProduct(product) {
    console.log(product);
    this.router.navigate([`/publications/publication/${product.Id}`]);
  }

  onFiltersChange(event){
    this.showSpinner = event;
  }
}
