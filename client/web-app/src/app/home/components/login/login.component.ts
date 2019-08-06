import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { FormControl, Validators} from "@angular/forms";
//import { ErrorStateMatcher } from '@angular/material/core';
import { CustomErrorStateMatcher } from "../../../shared/utils/utils";
import { Router } from "@angular/router";
import { LoginService } from "src/app/shared/services/login.service";
import { UserLogin } from "src/app/home/models/UserLogin";
import { NavbarService } from 'src/app/shared/services/navbar.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public error: string;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  passwordFormControl = new FormControl('', [Validators.required]);

  matcher = new CustomErrorStateMatcher();

  constructor(private router: Router,
              private _loginService: LoginService,
              private _navbarService: NavbarService) { }

  ngOnInit() {
  }

  login() {
    if (
      !(
        this.emailFormControl.hasError("required") ||
        this.emailFormControl.hasError("email") ||
        this.passwordFormControl.hasError("required")
      )
    ) {
      console.log(`The username is ${this.emailFormControl.value}`);
      console.log(`The password is ${this.passwordFormControl.value}`);
      let loggedUser = new UserLogin(this.emailFormControl.value, this.passwordFormControl.value);
      this._loginService.Login(loggedUser).subscribe(
        (res) => {
          this._navbarService.UserLogged(true);
          this._loginService.setLoggedUser(loggedUser);
          this.router.navigate(["/home/main"]);
        },(err) => {
          this.error = err.error.text;
        });
    }
  }
}
