import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TestService } from '../../../shared/services/test.service';
import { LoginService } from 'src/app/shared/services/login.service';
import { UserInfo } from 'src/app/shared/utils/types';
import { SigninService } from 'src/app/home/services/signin.service';


@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit {

  public user: UserInfo;
  public stateEmail: boolean = false;
  public stateFullName: boolean = false;
  public statePhone: boolean = false;
  public stateDateOfBirth: boolean = false;
  public stateCity: boolean = false;
  public stateNeighborhood: boolean = false;
  public stateDepartament: boolean = false;
  public stateStreet: boolean = false;

  constructor(private _TestService: TestService,
              private _loginService: LoginService, 
              private _signinService: SigninService,
              private toastr: ToastrService,
              ) { }

  ngOnInit() {
    console.log(this.getInformation());
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

  UpdateInformation() {
    this.stateFullName = false;
    this.stateCity = false;
    this.stateDateOfBirth = false;
    this.stateEmail = false;
    this.stateDepartament = false;
    this.statePhone = false;
    this.stateStreet = false;
    this.stateNeighborhood = false
    this._signinService.UpdateData(this.user).subscribe(
      (res) => { 
        this.toastr.success('Se han actualizado los datos con exito','',{
          timeOut: 2000,
          positionClass: 'toast-top-center'
        });
        console.log(res)
        });
      }
}
