import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CoreModule } from '../core/core.module';
import { FavoritesComponent } from './components/navbar/favorites/favorites.component';
import { ProfileComponent } from './components/navbar/profile/profile.component';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [NavbarComponent, FavoritesComponent, ProfileComponent],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule,
    TranslateModule
  ],
  exports: [NavbarComponent]
})
export class SharedModule { }
