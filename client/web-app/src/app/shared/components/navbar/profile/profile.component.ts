import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavbarService } from 'src/app/shared/services/navbar.service';




@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public _navbarService: NavbarService) {}

  ngOnInit() {
  }

  logout() {
    this._navbarService.UserLogged(false);
  }

}
