import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserHistoryComponent } from './components/user-history/user-history.component';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { UserInformationComponent } from './components/user-information/user-information.component';
import { ConfirmMailComponent } from './components/confirm-mail/confirm-mail.component';

@NgModule({
  declarations: [UserHistoryComponent, UserInformationComponent, ConfirmMailComponent],
  imports: [
    CommonModule,
    RouterModule,
    UserRoutingModule,
    SharedModule,
    CoreModule
  ]
})
export class UserModule { }
