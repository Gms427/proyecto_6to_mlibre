import { Component, OnInit } from '@angular/core';
import { Publication } from 'src/app/shared/utils/types';
import { PublicationService } from 'src/app/shared/services/publication.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  constructor(private _publicationService: PublicationService,
              private toastr: ToastrService,
              private router: Router) { }

  public favoritesList: Publication[] = [];

  async ngOnInit() {
    this.favoritesList = await this._publicationService.getAllProducts();
  }

  deleteItem(IdPublication: number) {
    console.log("delete");
  }

  deleteAll() {
    this.favoritesList = [];
    this.toastr.success('Historial borrado satisfactoriamente', '', {
      timeOut: 2000,
      positionClass: 'toast-top-center'
    });
  }

  navigateToPublication(IdPublication: number){
    this.router.navigate([`/publications/publication/${IdPublication}`]);
  }

}
