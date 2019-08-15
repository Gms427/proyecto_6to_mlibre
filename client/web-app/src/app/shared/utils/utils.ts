import { FormControl, FormGroupDirective, NgForm, Validators, AbstractControl, ValidatorFn, AsyncValidatorFn, Form } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import * as libphonenumber from 'google-libphonenumber';
import { TestService } from '../services/test.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export class CustomValidators {
  
  constructor(){ }
  
  public static NameValidator(fc: FormControl){
    if(fc.value && fc.value.length < 3){
      return ({ invalidUsername: true });
    }else{
      return (null);
    }
  }

  public static EmailDisponibilityValidator (testService: TestService): AsyncValidatorFn{
    return (fc: FormControl): any => {
      let email = fc.value
      return testService.verifyEmailDisponibility(email)
      .pipe(
        map(res => res ? (null) : { emailUsed: true })
      );
    };
  };

  public static PasswordValidator(fc: FormControl){
    let val = fc.value;
    var lowerCaseLetters: RegExp = /[a-z]/g;
    var upperCaseLetters: RegExp = /[A-Z]/g;
    var numbers: RegExp = /[0-9]/g;
  
    if(val != undefined){
      if(val.length < 6){
        return ({ invalidLength: true });
      }else if(!val.match(lowerCaseLetters)) {
        return ({ notLowerCaseLetters: true });
      }else if(!val.match(upperCaseLetters)) {
        return ({ notUpperCaseLetters: true });
      }else if(!val.match(numbers)){
        return ({ notNumbers: true });
      }else{
        return (null);
      }
    }
  }

  public static PhoneLengthValidator(fc: FormControl){
    if(fc.value && fc.value.length < 5){
      return ({ invalidLength: true });
    }else{
      return (null);
    }
  }

  public static PasswordMatchValidator(fc: AbstractControl){
    const password: string = fc.get('passwordFormControl').value;
    const confirmPassword: string = fc.get('confirmPasswordFormControl').value;
    
    if(password !== confirmPassword){
      fc.get('confirmPasswordFormControl').setErrors({ NoPassswordMatch: true });
      return ({ NoPassswordMatch: true });
    }else{
      return (null);
    }
  }
}

export class CustomErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return (control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}