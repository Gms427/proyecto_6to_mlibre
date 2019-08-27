import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { GeneralService } from 'src/app/shared/services/general.service';
import { LoginService } from 'src/app/shared/services/login.service';
import { UserInfo } from 'src/app/shared/utils/types';
import { TestService } from 'src/app/shared/services/test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-code',
  templateUrl: './check-code.component.html',
  styleUrls: ['./check-code.component.css']
})
export class CheckCodeComponent implements OnInit {

  codeFormControl = new FormControl('', [Validators.required]);
  user: any;

  constructor(
    private _generalService: GeneralService,
    private _loginService: LoginService,
    private _TestService: TestService,
    private router: Router
  ) { }

  async ngOnInit() {
    await this.getInformation();
  }

  async checkCode() {
    if (this.codeFormControl.valid) {
      await this._generalService.checkCode(this.user, this.codeFormControl.value).subscribe((res) => {
        if(res = 'confirmMail'){
          console.log("llego");
          this.router.navigate(['/user/information']);
        } 
      },(err) => {
        console.log(err);
      });
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
