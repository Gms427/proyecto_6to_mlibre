import { Component, OnInit, AfterViewInit, DoCheck } from '@angular/core';
import { UserSignin } from '../../models/UserSignin';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CustomErrorStateMatcher, CustomValidators } from '../../../shared/utils/utils';
import { SigninService } from '../../services/signin.service';
import { TestService } from 'src/app/shared/services/test.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  public userData: UserSignin = new UserSignin();
  public checkTerms: boolean = false;
  public error: string;
  public form: FormGroup;
  matcher = new CustomErrorStateMatcher();

  emailFormControl = new FormControl('', Validators.compose([
    Validators.required,
    Validators.email]
    ),
    CustomValidators.EmailDisponibilityValidator(this._testService)
  );

  /*passwordFormControl = new FormControl('', Validators.compose([
    CustomValidators.PasswordValidator,
    Validators.required
  ]));*/

  nameFormControl = new FormControl('', Validators.compose([
    CustomValidators.NameValidator, 
    Validators.required
  ]));

  phoneFormControl = new FormControl('', [
    Validators.required,
    CustomValidators.PhoneLengthValidator
  ]);


  constructor(private _signinService: SigninService,
              private _testService: TestService,
              private toastr: ToastrService,
              private router: Router,
              private fb: FormBuilder) { 
    this.form = this.fb.group({
      passwordFormControl: [null, Validators.compose([
        CustomValidators.PasswordValidator,
        Validators.required
      ])],
      confirmPasswordFormControl: [null, Validators.compose([
        Validators.required,
      ])]
    },{
      validator: CustomValidators.PasswordMatchValidator
    });
                }

  ngOnInit() {
  }

  signin() {
    this.userData.Email = this.emailFormControl.value;
    this.userData.Fullname = this.nameFormControl.value;
    this.userData.Password = this.form.value.confirmPasswordFormControl;
    this.userData.Phone = this.phoneFormControl.value;
    
    this._signinService.Signin(this.userData).subscribe(
      (res) => { 
        this.error = '';
        this.toastr.success('Se ha registrado con éxito','',{
          timeOut: 2000,
          positionClass: 'toast-top-center'
        });
        this.router.navigate(['home/login']);
      },(err) => {
        this.error = err.error.text;
        console.log(err);
      });
  }
}
