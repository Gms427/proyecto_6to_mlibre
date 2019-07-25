import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicationListComponent } from './components/publication-list/publication-list.component';
import { PublicationComponent } from './components/publication/publication.component';
import { PublicationCategorySelectorComponent } from './components/publication-category-selector/publication-category-selector.component';

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
    component: PublicationCategorySelectorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicationRoutingModule { }
