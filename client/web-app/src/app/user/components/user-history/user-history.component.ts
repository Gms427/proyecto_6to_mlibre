import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Publication } from 'src/app/shared/utils/types';
import { PublicationService } from '../../../shared/services/publication.service';

@Component({
  selector: 'app-user-history',
  templateUrl: './user-history.component.html',
  styleUrls: ['./user-history.component.css']
})
export class UserHistoryComponent implements OnInit {

  public history: Publication[];
  constructor(private toastr: ToastrService,
              private _publicationService: PublicationService) { }

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

  deleteItem(publication: any){
    console.log(publication);
    this.toastr.success(`Se ha borrado satisfactoriamente el item`,'',{
      timeOut: 2000,
      positionClass: 'toast-top-center'
    });
  }
}
