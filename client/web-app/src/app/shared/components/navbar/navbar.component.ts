import { Component, OnInit, ViewChild } from "@angular/core";
import { TranslateService } from '@ngx-translate/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public logged: boolean;

  constructor(public _loginService: LoginService) { }

  ngOnInit() {
      this._loginService.loginState$.subscribe(
        () => {
          this.logged = true;
          console.log(this.logged);
        }
      );

      this._loginService.logoutState$.subscribe(
        () => {
          this.logged = false;
        }
      );
   }
}
