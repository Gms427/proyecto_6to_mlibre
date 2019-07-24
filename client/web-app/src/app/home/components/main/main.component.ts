import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';
import { PublicationService } from 'src/app/shared/services/publication.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public categories: Category[];

  constructor(private _publicationService: PublicationService) { }

  async ngOnInit() {
    /*this.categories = [{
      label: 'Categories',
      items: [{ label: 'Cat 1' }, { label: 'Cat 2' }, { label: 'Cat 3' }, ]
    }];*/

    this.categories = await this._publicationService.getCategories();
    console.log("Categories desde main", this.categories);
  }
}
