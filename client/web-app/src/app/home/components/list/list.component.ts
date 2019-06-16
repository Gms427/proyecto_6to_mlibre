import { Component, OnInit } from "@angular/core";
import { LoginService } from "src/app/shared/services/login.service";
export interface Section {
  Id: number;
  Name: string;
  Price: string;
  State: boolean;
  Shipping: boolean;
  Favorite: boolean
  Img: string;
}

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit{
  Publications: Section[] = [
    {
      Id: 1,
      Name: "Chevrolet Celta 1.0 full",
      Price: "U$S 7.450",
      State: true,
      Shipping: true,
      Favorite: false,
      Img:
        "https://mlstaticquic-a.akamaihd.net/iphone-7-plus-32gb-original-recertificado-regalo-futuro21-D_NP_938282-MLU30746149274_052019-X.webp"
    },
    {
      Id: 2,
      Name: "Chevrolet Celta 1.0 full",
      Price: "U$S 7.450",
      State: false,
      Shipping: false,
      Favorite: false,
      Img:
        "https://mlstaticquic-a.akamaihd.net/iphone-7-plus-128-gb-refurbished-macrotec-D_NP_929296-MLU29526633106_022019-X.webp"
    },
    {
      Id: 3,
      Name: "Chevrolet Celta 1.0 full",
      Price: "U$S 7.450",
      State: false,
      Shipping: true,
      Favorite: false,
      Img:
        "https://mlstaticquic-a.akamaihd.net/iphone-7-plus-32gb-original-recertificado-regalo-futuro21-D_NP_938282-MLU30746149274_052019-X.webp"
    }
  ];
  length = this.Publications.length;
  pageSize = 10;
  public added: boolean = false;
  pageSizeOptions: number[] = [5, 10, 25];
  selected: string = "option3";


  constructor(loginService: LoginService) {}

  ngOnInit(){
  }

  addFav(product) {
    product.favorite = true;
  }

  removeFav(product) {
    product.favorite = false;
  }

  navegateToProduct(product) {
    console.log(product);
  }
}
