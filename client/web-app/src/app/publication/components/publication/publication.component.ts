import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PublicationService } from '../../../shared/services/publication.service';


@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {
  public id: number;
  public product: any;
  constructor(private _router: Router,
              private route: ActivatedRoute,
              private _publicationService: PublicationService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    console.log(this.id);

    this._publicationService.getProduct(this.id).subscribe(
      (res) => {
        console.log(res);
        this.product = res;
      }
    );
  }

}
