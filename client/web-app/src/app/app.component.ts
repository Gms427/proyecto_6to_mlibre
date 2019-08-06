import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Router } from "@angular/router";
import { TestService } from "./shared/services/test.service";
import { NavbarService } from "src/app/shared/services/navbar.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "web-app";

  constructor(
    private translate: TranslateService,
    private router: Router,
    private _testService: TestService,
    private _navbarService: NavbarService
  ) {
    translate.setDefaultLang("es");
    translate.use("es");
  }

  async ngOnInit() {
	console.log('Branch: login_new');
    const t = await this._testService.test();
  }

  changeOfRoutes() {
    this.changeNavbar();
    this.searcherNavbar();
    if (this.router.url === "/home/main") {
      this._navbarService.UpdateNavbarColor("rgba(0,0,0,0.4)");
    } else {
      this._navbarService.UpdateNavbarColor("#303641");
    }
  }

  changeNavbar() {
    if (
      this.router.url === "/home/login" ||
      this.router.url === "/home/signin"
    ) {
      this._navbarService.UpdateNavdarplace(false);
    } else {
      this._navbarService.UpdateNavdarplace(true);
    }
  }

  searcherNavbar() {
    if (this.router.url === "/home/login" ||  this.router.url === "/home/signin" ||  this.router.url === "/home/main") {
      this._navbarService.SearcherInNavdar(false);
    } else {
      this._navbarService.SearcherInNavdar(true);
    }
  }
}
