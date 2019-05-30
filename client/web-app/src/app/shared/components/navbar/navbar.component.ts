import { Component, OnInit, ViewChild } from "@angular/core";
import { Favorites } from "./favorites";
import { MatMenuTrigger } from '@angular/material/menu';


@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  favoritesList: Favorites[] = [
    {
      id: 1,
      name: "Chevrolet Celta 1.0 full",
      price: "U$S 7.450",
      img: "https://mlu-s1-p.mlstatic.com/700820-MLU29200013016_012019-T.jpg"
    },
    {
      id: 2,
      name: "Chevrolet Celta 1.0 full",
      price: "U$S 7.450",
      img: "https://mlu-s1-p.mlstatic.com/700820-MLU29200013016_012019-T.jpg"
    }
  ];

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  constructor() {}

  ngOnInit() {}

  navegateToProduct(favorite) {
    console.log("Product favorite: " + favorite.name);
  }

  deleteFavorite(favorite) {
    console.log("Delete favorite:" + favorite.name);
    const index: number = this.favoritesList.indexOf(favorite);
    if (index !== -1) {
      this.favoritesList.splice(index, 1);
    }
  }
  listAllFavorites() {
    console.log(this.favoritesList);
  }

  showFavoritesMenu(){
    this.trigger.openMenu();
  }
  hideFavoritesMenu(){
    this.trigger.closeMenu();
  }
}
