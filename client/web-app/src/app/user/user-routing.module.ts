import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserHistoryComponent } from 'src/app/user/components/user-history/user-history.component';

const routes: Routes = [
 /*{
    path: '',
    redirectTo: 'history',
    pathMatch: 'full'
  },*/
  {
    path: 'history',
    component: UserHistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
