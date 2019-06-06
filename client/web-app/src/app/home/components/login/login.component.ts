import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
//import { ErrorStateMatcher } from '@angular/material/core';
import { MyErrorStateMatcher } from '../../../shared/utils/utils';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public password: string;
  public username: string;
  //public items: MenuItem[];
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required
  ]);

  matcher = new MyErrorStateMatcher();

  constructor() { }

  ngOnInit() {
    
  }

  login() {
    if (!(this.emailFormControl.hasError('required') || this.emailFormControl.hasError('email') || this.passwordFormControl.hasError('required'))) {
      console.log(`The username is ${this.username}`);
      console.log(`The password is ${this.password}`);
    }
  }
}
