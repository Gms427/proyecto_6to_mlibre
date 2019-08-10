import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TestService } from '../../../shared/services/test.service';
import { LoginService } from 'src/app/shared/services/login.service';
import { UserInfo } from 'src/app/shared/utils/types';


@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit {

  public user: any;
  public stateEmail: boolean = false;
  public stateFullName: boolean = false;
  public statePhone: boolean = false;
  public stateDateOfBirth: boolean = false;
  public stateCity: boolean = false;
  public stateNeighborhood: boolean = false;
  public stateDepartament: boolean = false;
  public stateStreet: boolean = false;


  constructor(private _TestService: TestService,
    private _loginService: LoginService) { }

  ngOnInit() {
    console.log(this.getInformation());
    // console.log(this.stateEmail.disable)
  }

  getInformation() {
    this._TestService.getUserInfo(this._loginService.getLoggedUser().Email)
      .subscribe(
        (res) => {
          console.log(res);
          this.user = res;
        }
      );
  }

}
