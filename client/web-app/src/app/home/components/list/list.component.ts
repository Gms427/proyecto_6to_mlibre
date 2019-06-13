import { Component, OnInit } from "@angular/core";
import { LoginService } from "src/app/shared/services/login.service";
export interface Section {
  id: number;
  name: string;
  price: string;
  state: boolean;
  Shipping: boolean;
  img: string;
}

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent {
  length = 100;
  pageSize = 10;
  public added: boolean = false;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  selected: string = "option3";

  Publications: Section[] = [
    {
      id: 1,
      name: "Chevrolet Celta 1.0 full",
      price: "U$S 7.450",
      state: true,
      Shipping: true,
      img:
        "https://mlstaticquic-a.akamaihd.net/iphone-7-plus-32gb-original-recertificado-regalo-futuro21-D_NP_938282-MLU30746149274_052019-X.webp"
    },
    {
      id: 2,
      name: "Chevrolet Celta 1.0 full",
      price: "U$S 7.450",
      state: false,
      Shipping: false,
      img:
        "https://mlstaticquic-a.akamaihd.net/iphone-7-plus-128-gb-refurbished-macrotec-D_NP_929296-MLU29526633106_022019-X.webp"
    },
    {
      id: 3,
      name: "Chevrolet Celta 1.0 full",
      price: "U$S 7.450",
      state: false,
      Shipping: true,
      img:
        "https://mlstaticquic-a.akamaihd.net/iphone-7-plus-32gb-original-recertificado-regalo-futuro21-D_NP_938282-MLU30746149274_052019-X.webp"
    }
  ];

  constructor(loginService: LoginService) {}

  addFav() {
    this.added = true;
  }

  removeFav() {
    this.added = false;
  }

  navegateToProduct(product) {
    console.log(product);
  }
}
