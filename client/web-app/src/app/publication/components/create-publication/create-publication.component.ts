import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../shared/services/general.service';
import { PublicationService } from 'src/app/shared/services/publication.service';
import { Category, Subcategory, Filter } from '../../../shared/utils/types';

@Component({
  selector: 'app-create-publication',
  templateUrl: './create-publication.component.html',
  styleUrls: ['./create-publication.component.css']
})
export class CreatePublicationComponent implements OnInit {
  
  public category: Category;
  public subCategoryFields: Filter[] = [];

  constructor(private _generalService: GeneralService,
              private _publicationService: PublicationService) { }

  ngOnInit() {
    this.category = this._generalService.getCategoryForCreate();
    console.log(this.category);
  }

  async getSubcategoryFields(idSubcategory: number){
    console.log(idSubcategory);
    this.subCategoryFields = await this._publicationService.getSubcategoryFields(idSubcategory, this.category.Id)
    console.log(this.subCategoryFields);
  }

}
