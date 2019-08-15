import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Publication } from 'src/app/shared/utils/types';
import { PublicationService } from '../../../shared/services/publication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-history',
  templateUrl: './user-history.component.html',
  styleUrls: ['./user-history.component.css']
})
export class UserHistoryComponent implements OnInit {

  public history: Publication[] = [];

  constructor(private toastr: ToastrService,
              private _publicationService: PublicationService,
              private router: Router) { }

  async ngOnInit() {
    this.history = await this._publicationService.getProducts();
  }

  deleteHistory(){
    this.history = [];
    this.toastr.success('Historial borrado satisfactoriamente','',{
      timeOut: 2000,
      positionClass: 'toast-top-center'
    });
  }

  deleteItem(IdPublication: number){
    this.history.forEach((p: Publication, i: number, a: Publication[]) => {
      if(p.Id === IdPublication){
        a.splice(i, 1);
      }
    });


    this.toastr.success(`Se ha borrado satisfactoriamente el item`,'',{
      timeOut: 2000,
      positionClass: 'toast-top-center'
    });
  }

  navigateToPublication(IdPublication: number){
    this.router.navigate([`/publications/publication/${IdPublication}`]);
  }
}
