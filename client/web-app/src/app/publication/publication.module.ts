import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicationListComponent } from './components/publication-list/publication-list.component';
import { PublicationComponent } from './components/publication/publication.component';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PublicationRoutingModule } from './publication-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [PublicationListComponent, PublicationComponent],
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