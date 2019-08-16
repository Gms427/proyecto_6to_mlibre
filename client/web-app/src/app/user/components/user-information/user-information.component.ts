import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FormControl, Validators } from "@angular/forms";
import { TestService } from '../../../shared/services/test.service';
import { LoginService } from 'src/app/shared/services/login.service';
import { UserInfo } from 'src/app/shared/utils/types';
import { SigninService } from 'src/app/home/services/signin.service';
import { UserLogin } from "src/app/home/models/UserLogin";



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
  private display: boolean = false;
  private displayModalConfEmail: boolean = false;
  private displayChangePassword: boolean = false;

  public error: string;

  passwordFormControl = new FormControl('', [Validators.required]);

  constructor(private _TestService: TestService,
    private _loginService: LoginService,
    private _signinService: SigninService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    console.log(this.getInformation());
  }

  showDialog() {
    this.display = true;
    this.stateFullName = false;
    this.stateCity = false;
    this.stateDateOfBirth = false;
    this.stateEmail = false;
    this.stateDepartament = false;
    this.statePhone = false;
    this.stateStreet = false;
    this.stateNeighborhood = false;
  }

  @ViewChild("email") emailField: ElementRef;
  @ViewChild("fullName") fullNameField: ElementRef;
  @ViewChild("dateOfBirth") dateOfBirthField: ElementRef;
  @ViewChild("city") cityField: ElementRef;
  @ViewChild("neighborhood") neighborhoodField: ElementRef;
  @ViewChild("street") streetField: ElementRef;
  @ViewChild("departament") departametField: ElementRef;
  @ViewChild("phone") phoneField: ElementRef;

  editField(field) {
    const that = this;
    const editFielId = field.id
    console.log(editFielId)
    setTimeout(function () {
      switch (editFielId) {
        case 'mat-input-4':
          that.emailField.nativeElement.focus();
          break;
        case 'mat-input-5':
          that.fullNameField.nativeElement.focus();
          break;
        case 'mat-input-6':
          that.phoneField.nativeElement.focus();
          break;
        case 'mat-input-7':
          that.dateOfBirthField.nativeElement.focus();
          break;
        case 'mat-input-8':
          that.departametField.nativeElement.focus();
          break;
        case 'mat-input-9':
          that.cityField.nativeElement.focus();
          break;
        case 'mat-input-10':
          that.neighborhoodField.nativeElement.focus();
          break;
        case 'mat-input-11':
          that.streetField.nativeElement.focus();
          break;
        default:
          break;
      }

    }, 200);

  }

  getInformation() {
    this._TestService.getUserInfo(this._loginService.getLoggedUser().Email)
      .subscribe(
        (res) => {
          this.user = res;
        }
      );
  }

  UpdateInformation() {
    if (!(this.passwordFormControl.hasError("required"))) {
      let CheckUser = new UserLogin(this.user.Email, this.passwordFormControl.value);
      this._loginService.checkPassword(CheckUser).subscribe((res) => {
        this._signinService.UpdateData(this.user).subscribe(
          (res) => {
            this.toastr.success('Se han actualizado los datos con exito', '', {
              timeOut: 2000,
              positionClass: 'toast-top-center'
            });
            this.display = false;
            this.passwordFormControl.setValue('');
          });
      }, (err) => {
        this.error = err.error.text;
      });
    }
  }

  showModalEmail() {
    this.displayModalConfEmail = true;
  }

  showModalChangePassword() {
    this.displayChangePassword = true;
  }

  closeModal() {
    this.displayModalConfEmail = false;
  }

  sendEmail() {
    if (!(this.passwordFormControl.hasError("required"))) {
      let CheckUser = new UserLogin(this.user.Email, this.passwordFormControl.value);
      this._loginService.checkPassword(CheckUser).subscribe((res) => {
        this.toastr.success('Se ha enviado el e-mail', '', {
          timeOut: 2000,
          positionClass: 'toast-top-center'
        });
        this.displayChangePassword = false;
        this.error = ""
        this.passwordFormControl.setValue('');
      }, (err) => {
        this.error = err.error.text;
      });
    }
  }
}
