import { Component, OnInit } from '@angular/core';
import { UserSignin } from '../../models/UserSignin';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
//import { ErrorStateMatcher } from '@angular/material/core';
import { MyErrorStateMatcher } from '../../../shared/utils/utils';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  public userData: UserSignin = new UserSignin();
  public buttonEnabled: boolean = false;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required
  ]);

  nameFormControl = new FormControl('', [
    Validators.required
  ]);

  surnameFormControl = new FormControl('', [
    Validators.required
  ]);

  phoneFormControl = new FormControl('', [
    Validators.required
  ]);


  constructor() { }

  ngOnInit() {
  }

  signin() {
    console.log(this.userData);
  }
}
