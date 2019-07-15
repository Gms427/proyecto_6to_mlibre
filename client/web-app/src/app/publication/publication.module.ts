import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicationListComponent } from './components/publication-list/publication-list.component';
import { PublicationComponent } from './components/publication/publication.component';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PublicationRoutingModule } from './publication-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PublicationProfileComponent } from './components/publication/publication-profile/publication-profile.component';
import { PublicationDescriptionComponent } from './components/publication/publication-description/publication-description.component';
import { FiltersComponent } from './components/publication-list/filters/filters.component';


@NgModule({
  declarations: [PublicationListComponent, PublicationComponent, PublicationProfileComponent, PublicationDescriptionComponent, FiltersComponent],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule,
    TranslateModule,
    PublicationRoutingModule,
    SharedModule
  ]
})
export class PublicationModule { }
