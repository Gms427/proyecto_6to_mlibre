import { Component, OnInit, ViewChild } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { LoginService } from "../../services/login.service";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { NavbarService } from 'src/app/shared/services/navbar.service';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  public logged: boolean;
  public userLogin: boolean;
  public showNavbar: boolean = true;
  public navbarColor: string;

  constructor(public _loginService: LoginService,
              public _navbarService: NavbarService) {
  }

  ngOnInit() {

    this._navbarService.updateNavbarColor$.subscribe(
      (res) => {
        this.navbarColor = res;
        console.log(res);
      }
    );

    this._loginService.login$.subscribe(res => {
      this.logged = res;
      console.log(this.logged);
    });

    this._loginService.inLogin$.subscribe(res => {
      this.userLogin = res;
      console.log(this.userLogin);
    });

    this._loginService.showNavbar$.subscribe(
      (res) => {
        this.showNavbar = res;
      }
    );
  }

  login() {
    this._loginService.userIsLogin();
  }

}
