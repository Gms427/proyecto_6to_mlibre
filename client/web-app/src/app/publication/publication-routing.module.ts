import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicationListComponent } from './components/publication-list/publication-list.component';
import { PublicationComponent } from './components/publication/publication.component';
import { PublicationCategorySelectorComponent } from './components/publication-category-selector/publication-category-selector.component';
import { ResolveUserLogged } from '../shared/utils/guards';
import { CreatePublicationComponent } from './components/create-publication/create-publication.component';

const routes: Routes = [
 {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: PublicationListComponent
  },
  {
    path: 'publication/:id',
    component: PublicationComponent
  },
  {
    path: 'new',
    component: PublicationCategorySelectorComponent,
    canActivate: [ResolveUserLogged]
  },
  {
    path: 'create',
    component: CreatePublicationComponent,
    canActivate: [ResolveUserLogged]    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicationRoutingModule { }
