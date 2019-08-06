import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CoreModule } from '../core/core.module';
import { FavoritesComponent } from './components/navbar/favorites/favorites.component';
import { ProfileComponent } from './components/navbar/profile/profile.component';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SearchComponent } from './components/search/search.component';
import { NotificationsComponent } from './components/navbar/notifications/notifications.component';
import { ResolveUserLogged } from './utils/guards';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [NavbarComponent, FavoritesComponent, ProfileComponent, SearchComponent, NotificationsComponent, FooterComponent],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule,
    TranslateModule
  ],
  exports: [NavbarComponent, SearchComponent, FooterComponent],
  providers: [ResolveUserLogged]
})
export class SharedModule { }
