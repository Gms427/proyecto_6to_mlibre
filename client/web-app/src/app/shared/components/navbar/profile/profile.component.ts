import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LoginService } from "../../../services/login.service";




@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public _loginService: LoginService) {}

  ngOnInit() {
  }

  logout() {
    this._loginService.Logout();
  }

}
