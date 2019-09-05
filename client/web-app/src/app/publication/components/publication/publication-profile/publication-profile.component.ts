import { Component, OnInit } from "@angular/core";
import { PublicationService } from "../../../../shared/services/publication.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-publication-profile",
  templateUrl: "./publication-profile.component.html",
  styleUrls: ["./publication-profile.component.css"]
})
export class PublicationProfileComponent implements OnInit {
  constructor(
    private _publicationService: PublicationService,
    private route: ActivatedRoute
  ) { }

  public id: number;
  public product: any = {
    Name: '',
    Price: '',
    Img: '',
  };

  images: any[];


  selected: string = "option1";

  ngOnInit() {
    this.id = this.route.snapshot.params.id;

    this._publicationService.getProduct(this.id).subscribe(res => {
      this.product = res;
      this.images = [];
      this.images.push({ source: 'https://mlstaticquic-a.akamaihd.net/chevrolet-celta-14-advantage-aa-dir-2015-D_NQ_NP_657135-MLU31443543466_072019-F.webp%202x', title: this.product.Name, alt: this.product.Name });
      this.images.push({ source: 'https://mlstaticquic-a.akamaihd.net/chevrolet-celta-14-lt-full-D_NQ_NP_953692-MLU31337042289_072019-F.webp%202x', title: this.product.Name, alt: this.product.Name });
      this.images.push({ source: 'https://mlstaticquic-a.akamaihd.net/chevrolet-celta-14-2014-color-gris-oscuro-5-puertas-D_NQ_NP_690595-MLU31742686792_082019-F.webp%202x', title: this.product.Name, alt: this.product.Name });
    });
  }

  addFav(product) {
    product.favorite = true;
  }

  removeFav(product) {
    product.favorite = false;
  }
}
