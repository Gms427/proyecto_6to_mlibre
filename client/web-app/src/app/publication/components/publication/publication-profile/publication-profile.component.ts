import { Component, OnInit } from '@angular/core';
import { PublicationService } from '../../../../shared/services/publication.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-publication-profile',
  templateUrl: './publication-profile.component.html',
  styleUrls: ['./publication-profile.component.css']
})
export class PublicationProfileComponent implements OnInit {

  constructor(private _publicationService: PublicationService, private route: ActivatedRoute) { }

  public id: number;
  public product: any;

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    
    this._publicationService.getProduct(this.id).subscribe(
      (res) => {
        console.log(res);
        this.product = res;
      }
    );
  }

}
