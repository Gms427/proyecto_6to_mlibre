import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { LoginService } from 'src/app/shared/services/login.service';
import { TestService } from 'src/app/shared/services/test.service';
import { SigninService } from 'src/app/home/services/signin.service';
import { ToastrService } from 'ngx-toastr';
import { UserInfo } from 'src/app/shared/utils/types';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(
    private _TestService: TestService,
    private _loginService: LoginService,
    private _signinService: SigninService,
    private toastr: ToastrService,
  ) { }

  OldPasswordFormControl = new FormControl('', [Validators.required]);
  NewPasswordFormControl = new FormControl('', [Validators.required]);
  NewPasswordRepeatFormControl = new FormControl('', [Validators.required]);
  user: UserInfo;


  async ngOnInit() {
    await this.getInformation();
  }

  getInformation() {
    this._TestService.getUserInfo(this._loginService.getLoggedUser().Email)
      .subscribe(
        (res) => {
          this.user = res;
        }
      );
  }
  ChangePassword(){
    if(!(this.OldPasswordFormControl.hasError("required")) && !(this.NewPasswordFormControl.hasError("required")) && !(this.NewPasswordRepeatFormControl.hasError("required"))){
      this._loginService.checkPassword(this.OldPasswordFormControl.value, this.user)
      .subscribe((res)=> {
        console.log(res)
      }, (err)=>{
        console.log(err)
        this.toastr.error('Error', err, {
          timeOut: 2000,
          positionClass: 'toast-top-center'
        });
      });
      console.log("Old Password: " + this.OldPasswordFormControl.value)
      console.log("New Password: " + this.NewPasswordFormControl.value)
      console.log("New Password Repeat: " + this.NewPasswordRepeatFormControl.value)
      console.log("User: " + this.user)
    }
  }
}
