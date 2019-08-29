import { Component, OnInit, ViewChild } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { LoginService } from "../../services/login.service";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { NavbarService } from "src/app/shared/services/navbar.service";
import { MatSidenav, MatBottomSheet } from '@angular/material';
import { HelpComponent } from '../help/help.component';

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
  public searchNadvar: boolean;
  public width = 1;
  

  @ViewChild("sidenav") sideNav: MatSidenav;

  constructor(
    public _loginService: LoginService,
    public _navbarService: NavbarService,
    private _bottomSheet: MatBottomSheet
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
    });

    this._navbarService.searcherInNavdar$.subscribe(res => {
      this.searchNadvar = res;
    });
  }

  test(){
    this.width = 300;
    this.sideNav.toggle();
  }

  openBottomSheet(): void {
    this._bottomSheet.open(HelpComponent);
  }

  close(){
    this.sideNav.toggle();
    setTimeout(() => {
      this.width = 1;
    }, 300);
  }
}
