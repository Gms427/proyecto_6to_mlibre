import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./components/main/main.component";
import { LoginComponent } from "./components/login/login.component";
import { SigninComponent } from "./components/signin/signin.component";
import { ListComponent } from "./components/list/list.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "main",
    pathMatch: "full"
  },
  {
    path: "main",
    component: MainComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "signin",
    component: SigninComponent
  },
  {
    path: "list",
    component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
