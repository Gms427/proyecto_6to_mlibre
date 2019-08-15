import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserHistoryComponent } from './components/user-history/user-history.component';
import { UserInformationComponent } from './components/user-information/user-information.component';


const routes: Routes = [
 /*{
    path: '',
    redirectTo: 'history',
    pathMatch: 'full'
  },*/
  {
    path: 'history',
    component: UserHistoryComponent
  },
  {
    path: 'information',
    component: UserInformationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
