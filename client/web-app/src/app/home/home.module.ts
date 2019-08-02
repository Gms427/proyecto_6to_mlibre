import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { HomeRoutingModule } from './home-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module'
import { TranslateModule } from '@ngx-translate/core';
import { PopularCategoriesComponent } from './components/main/popular-categories/popular-categories.component';
import { CategoriesMenuComponent } from './components/main/categories-menu/categories-menu.component';
import { OfficialStoresComponent } from './components/official-stores/official-stores.component';


@NgModule({
  declarations: [MainComponent, LoginComponent, SigninComponent, PopularCategoriesComponent, CategoriesMenuComponent, OfficialStoresComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule,
    TranslateModule,
    SharedModule
  ],
  providers: []
})
export class HomeModule { }
