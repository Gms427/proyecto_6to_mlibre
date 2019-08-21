import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../shared/services/general.service';
import { PublicationService } from 'src/app/shared/services/publication.service';
import { Category, Subcategory, Filter, Currency, PublicationBaseInfo, Publication, UserInfo } from '../../../shared/utils/types';
import { TestService } from 'src/app/shared/services/test.service';
import { LoginService } from 'src/app/shared/services/login.service';
import { ToastrService } from 'ngx-toastr';

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
  public publicationBaseInfo: PublicationBaseInfo = { Currency: "", Description: "", Price: null, Stock: null, Title: "", Category: null, Subcategory: null };
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
    this.getInformation();
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
    console.log(this.publicationBaseInfo);
    this.subCategoryFields.forEach((f) => console.log(f.Name + ': ', f.Values));
    this._publicationService.uploadPublication(this.publicationBaseInfo, this.user).subscribe(
    (res) => {
      this.toastr.success('Se publico', '', {
        timeOut: 2000,
        positionClass: 'toast-top-center'
      });
    },
    (error) => {
      console.log(error);
      this.toastr.error(error.error.text);
    });
  }

}
