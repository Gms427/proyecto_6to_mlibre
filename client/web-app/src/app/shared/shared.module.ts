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
import { CategoriesMenuComponent } from './components/categories-menu/categories-menu.component';
import { HelpComponent } from './components/help/help.component';
import { CheckCodeComponent } from '../user/components/check-code/check-code.component';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [NavbarComponent, FavoritesComponent, ProfileComponent, SearchComponent, NotificationsComponent, FooterComponent, CategoriesMenuComponent, HelpComponent, CheckCodeComponent],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule,
    TranslateModule,
    SharedRoutingModule
  ],
  exports: [NavbarComponent, SearchComponent, FooterComponent, CategoriesMenuComponent, HelpComponent],
  providers: [ResolveUserLogged],
  entryComponents: [HelpComponent]
})
export class SharedModule { }
