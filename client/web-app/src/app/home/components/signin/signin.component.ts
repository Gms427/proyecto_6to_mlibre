import { Component, OnInit, AfterViewInit, DoCheck } from '@angular/core';
import { UserSignin } from '../../models/UserSignin';
import { FormControl, Validators } from '@angular/forms';
import { CustomErrorStateMatcher, CustomValidators } from '../../../shared/utils/utils';
import { SigninService } from '../../services/signin.service';
import { TestService } from 'src/app/shared/services/test.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  public userData: UserSignin = new UserSignin();
  public checkTerms: boolean = false;
  public error: string;
  matcher = new CustomErrorStateMatcher();

  emailFormControl = new FormControl('', Validators.compose([
    Validators.required,
    Validators.email]
    ),
    CustomValidators.EmailDisponibilityValidator(this._testService)
  );

  passwordFormControl = new FormControl('', Validators.compose([
    CustomValidators.PasswordValidator,
    Validators.required
  ]));

  nameFormControl = new FormControl('', Validators.compose([
    CustomValidators.NameValidator, 
    Validators.required
  ]));

  surnameFormControl = new FormControl('', [
    Validators.required
  ]);

  phoneFormControl = new FormControl('', [
    Validators.required,
    CustomValidators.PhoneLengthValidator
  ]);


  constructor(private _signinService: SigninService,
              private _testService: TestService) {   }

  ngOnInit() {
    /*this.nameFormControl.setValue("Gonzalo Manzzi");
    this.emailFormControl.setValue("gonzalo427@hotmail.com");
    this.phoneFormControl.setValue("096011626");
    this.passwordFormControl.setValue("tubiega");
    console.log(!this.checkTerms &&
      this.nameFormControl.status !== 'VALID' &&
      this.phoneFormControl.status !== 'VALID' &&
      this.emailFormControl.status !== 'VALID' && 
      this.passwordFormControl.status !== 'VALID');*/
  }

  /*ngAfterViewInit(): void {
    console.log(!(this.checkTerms &&
      this.nameFormControl.status !== 'INVALID' &&
      this.phoneFormControl.status !== 'INVALID' &&
      this.emailFormControl.status !== 'INVALID' && 
      this.passwordFormControl.status !== 'INVALID') );
      console.log("check Terms", this.checkTerms);
      console.log("nameFormControl", this.nameFormControl.status !== 'INVALID');
      console.log("phoneFormControl", this.phoneFormControl.status !== 'INVALID');
      console.log("emailFormControl", this.emailFormControl.status !== 'INVALID');
      console.log("passwordFormControl", this.passwordFormControl.status !== 'INVALID');
      console.log(this.passwordFormControl);
  }

  ngDoCheck(): void {
    console.log(!(this.checkTerms &&
      this.nameFormControl.status !== 'INVALID' &&
      this.phoneFormControl.status !== 'INVALID' &&
      this.emailFormControl.status !== 'INVALID' && 
      this.passwordFormControl.status !== 'INVALID') );
      console.log("check Terms", this.checkTerms);
      console.log("nameFormControl", this.nameFormControl.status !== 'INVALID');
      console.log("phoneFormControl", this.phoneFormControl.status !== 'INVALID');
      console.log("emailFormControl", this.emailFormControl.status !== 'INVALID');
      console.log("passwordFormControl", this.passwordFormControl.status !== 'INVALID');
  }*/

  signin() {
    console.log(this.userData);
    console.log(this.passwordFormControl);
    this._signinService.Signin(this.userData).subscribe(
      (res) => { 
        console.log(res)
        this.error = "";
      },(err) => {
        this.error = err.error.text;
        console.log(err);
      });
  }
}
