import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { HomeRoutingModule } from './home.routing.module';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module'
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [MainComponent, LoginComponent, SigninComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule,
    TranslateModule,
    SharedModule
  ]
})
export class HomeModule { }
