import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserHistoryComponent } from './components/user-history/user-history.component';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [UserHistoryComponent],
  imports: [
    CommonModule,
    RouterModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
