import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResolveUserLogged } from './shared/utils/guards';

const routes: Routes = [
 {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'publications',
    loadChildren: './publication/publication.module#PublicationModule'
  },
  {
    path: 'user',
    loadChildren: './user/user.module#UserModule',
    canActivate: [ResolveUserLogged]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
