import { Component, OnInit, ViewChild } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { LoginService } from "../../services/login.service";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  public logged: boolean;
  public userLogin: boolean = true;

  constructor(public _loginService: LoginService) {
  }

  ngOnInit() {
    this._loginService.login$.subscribe(res => {
      this.logged = res;
      console.log(this.logged);
    });
    // this.getPreviousUrl();
  }

  test() {
    // this._loginService.Logout();
    this.getPreviousUrl();
  }

  public getPreviousUrl() {
    const url = this._loginService.getPreviousUrl();
     if (url == "/home/login" || url == "/home/sigin") {
       this.userLogin = false;
     } else {
       this.userLogin = true;
    }
  }
}
