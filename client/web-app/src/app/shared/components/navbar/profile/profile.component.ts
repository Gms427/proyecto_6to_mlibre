import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/shared/services/navbar.service';
import { LoginService } from 'src/app/shared/services/login.service';
import { TestService } from '../../../../shared/services/test.service';
import { UserInfo } from '../../../utils/types';
import { Router } from "@angular/router";



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public _navbarService: NavbarService,
    public _loginService: LoginService,
    private _TestService: TestService, 
    private router: Router) { }

  public user: UserInfo;

  ngOnInit() {
    this.getInformation();
  }

  logout() {
    this._navbarService.UserLogged(false);
    if(this.router.url != '/home/main'){
      this.router.navigate(["/home/main"]);      
    }
  }

  getInformation() {
    this._TestService.getUserInfo(this._loginService.getLoggedUser().Email)
      .subscribe(
        (res) => {
          this.user = res;
        }
      );

  }
}
