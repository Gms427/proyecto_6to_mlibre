import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserHistoryComponent } from './components/user-history/user-history.component';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { UserInformationComponent } from './components/user-information/user-information.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';

@NgModule({
  declarations: [UserHistoryComponent, UserInformationComponent, ChangePasswordComponent],
  imports: [
    CommonModule,
    RouterModule,
    UserRoutingModule,
    SharedModule,
    CoreModule
  ]
})
export class UserModule { }
