import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../shared/services/general.service';
import { PublicationService } from 'src/app/shared/services/publication.service';
import { Category, Subcategory, Filter, Currency, PublicationBaseInfo } from '../../../shared/utils/types';

@Component({
  selector: 'app-create-publication',
  templateUrl: './create-publication.component.html',
  styleUrls: ['./create-publication.component.css']
})
export class CreatePublicationComponent implements OnInit {
  
  public category: Category;
  public subCategoryFields: Filter[] = [];
  public subcategory: Subcategory;
  public currencies: Currency[];
  public booleanFields: Filter[];
  public publicationBaseInfo: PublicationBaseInfo = { Currency: "", Description: "", Price: null, Quantity: null, Title: "" };

  constructor(private _generalService: GeneralService,
              private _publicationService: PublicationService) { }

  async ngOnInit() {
    //this.category = this._generalService.getCategoryForCreate();
    this.currencies = [
      {
        Id: 1,
        Name: 'Pesos Uruguayos',
        Symbol: '$UYU'
      },
      {
        Id: 2,
        Name: 'Dólares',
        Symbol: '$USD'
      },
      {
        Id: 3,
        Name: 'Euros',
        Symbol: '€EUR'
      }
    ];
    let categories = await this._publicationService.getCategories();
    this.category = categories[0];    
    console.log(categories);
    console.log(this.category);
  }

  async getSubcategoryFields(event){
    console.log(event);
    this.subcategory = this.category.Subcategories.find(s => s.Id === event.value);
    console.log(this.subcategory);
    this.subCategoryFields = await this._publicationService.getSubcategoryFields(event.value, this.category.Id);
    this.booleanFields = this.subCategoryFields.filter(f => f.Type === "BOOLEAN");
    console.log(this.booleanFields);
    console.log(this.subCategoryFields);
  }

  post(){
    console.log(this.publicationBaseInfo);
    this.subCategoryFields.forEach((f) => console.log(f.Name+': ', f.Values));
  }

}
