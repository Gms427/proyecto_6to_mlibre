import { Component, OnInit, ViewChild } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { LoginService } from "../../services/login.service";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { NavbarService } from "src/app/shared/services/navbar.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  public logged: boolean;
  public userLogin: boolean;
  public navbarColor: string;
  public flag: boolean;

  constructor(
    public _loginService: LoginService,
    public _navbarService: NavbarService
  ) {}

  ngOnInit() {
    this._navbarService.updateNavbarColor$.subscribe(res => {
      this.navbarColor = res;
    });

    this._navbarService.updateNavbarPlace$.subscribe(res => {
      this.flag = res;
    });

    this._navbarService.userLogged$.subscribe(res => {
      this.logged = res;
    })
  }
}
