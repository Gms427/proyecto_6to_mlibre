import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../shared/services/general.service';
import { PublicationService } from 'src/app/shared/services/publication.service';
import { Category, Subcategory, Filter, Currency, PublicationBaseInfo, Publication, UserInfo } from '../../../shared/utils/types';
import { TestService } from 'src/app/shared/services/test.service';
import { LoginService } from 'src/app/shared/services/login.service';
import { ToastrService } from 'ngx-toastr';
import { query } from '@angular/core/src/render3';

@Component({
  selector: 'app-create-publication',
  templateUrl: './create-publication.component.html',
  styleUrls: ['./create-publication.component.css']
})
export class CreatePublicationComponent implements OnInit {
  public category: Category;
  public user: UserInfo;
  public subCategoryFields: Filter[] = [];
  public subcategory: Subcategory;
  public currencies: Currency[];
  public booleanFields: Filter[];
  public publicationBaseInfo: PublicationBaseInfo = { 
    Currency: "", 
    Description: "", 
    Price: null,
    Stock: null, 
    Title: "", 
    Category: null, 
    Subcategory: null, 
    NewOrUsed: null
  };

  public newOrUsedOptions = [ { 
    Value: 0,
    DisplayValue: "Usado"
  },
  {
    Value: 1,
    DisplayValue: "Nuevo"
  }];


  public publication: Publication;

  constructor(private _generalService: GeneralService,
    private _publicationService: PublicationService,
    private _TestService: TestService,
    private _loginService: LoginService, 
    private toastr: ToastrService,
    ) { }

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
    this.publicationBaseInfo.Category = this.category.Id;
    console.log(categories);
    console.log(this.category);
    //this.getInformation();
  }

  async getSubcategoryFields(event) {
    console.log(event);
    this.subcategory = this.category.Subcategories.find(s => s.Id === event.value);
    this.publicationBaseInfo.Subcategory = this.subcategory.Id;
    console.log(this.subcategory);
    this.subCategoryFields = await this._publicationService.getSubcategoryFields(event.value, this.category.Id);
    this.booleanFields = this.subCategoryFields.filter(f => f.Type === "BOOLEAN");
    console.log(this.booleanFields);
    console.log(this.subCategoryFields);
  }

  getInformation() {
    this._TestService.getUserInfo(this._loginService.getLoggedUser().Email)
      .subscribe(
        (res) => {
          this.user = res;
          console.log('userinfo', this.user);
        }
      );
  }

  post() {
    console.log("publicationBaseInfo", this.publicationBaseInfo);
    this.subCategoryFields.forEach((f) => console.log(f.Name + ': ', f.Values));
    
    console.log("subCategoryFields",this.subCategoryFields);

    let catFields = [];
    let subCatFields = [];

    this.subCategoryFields.forEach((f) => {
        if(f.Category){
          catFields.push(f);
        }else{
          subCatFields.push(f);
        }
    });

    console.log("catFields", catFields);
    console.log("subCatFields", subCatFields);

    console.log("insert category", this.makeInsert(true, catFields));
    console.log("inser subcategory", this.makeInsert(false, subCatFields));

    /*this._publicationService.uploadPublication(this.publicationBaseInfo, this.user).subscribe(
    (res) => {
      this.toastr.success('Se publicó', '', {
        timeOut: 2000,
        positionClass: 'toast-top-center'
      });
    },
    (error) => {
      console.log(error);
      this.toastr.error(error.error.text);
    });*/
  }

  makeInsert(isCategory: boolean, fields: Filter[]): string{
    
    let table = fields[0].TableName;
    console.log(table);

    let columns = fields.map(f => f.ColumnName);
    console.log(columns);
    let values = fields.map(f => {
      
      switch (typeof(f.Values)) {
        
        case "string":
          return `'${f.Values}'`;
          break;

        case "number":
          return `'${f.Values}'`;
          break;
          
        case "boolean":
          return f.Values;
          break;
      
        default:
          return f.Values;
          break;
      }
      
    });

    let query = `INSERT INTO ${table} (${columns})
                (${values})`;
    
    return query;
  }

}
