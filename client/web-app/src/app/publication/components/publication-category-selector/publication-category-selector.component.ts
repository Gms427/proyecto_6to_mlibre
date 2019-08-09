import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/utils/types';
import { PublicationService } from 'src/app/shared/services/publication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publication-category-selector',
  templateUrl: './publication-category-selector.component.html',
  styleUrls: ['./publication-category-selector.component.css']
})
export class PublicationCategorySelectorComponent implements OnInit {

  public categories: Category[] = [];

  constructor(private _publicationService: PublicationService,
              private _router: Router) { }

  async ngOnInit() {
    this.categories = await this._publicationService.getCategories();
  }

  navigateToCreate(idCategory: number){
    console.log(`Navegando a crear publicación (id category = ${idCategory})`);
    this._router.navigate(['/publications/create']);
  }
}
