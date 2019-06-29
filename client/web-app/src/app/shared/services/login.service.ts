import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { UserLogin } from "src/app/home/models/UserLogin";
import { Router, NavigationEnd } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  public loggedUser: UserLogin = new UserLogin("", "");
  public login = new Subject<boolean>();
  public login$: Observable<boolean> = this.login.asObservable();

  constructor(private router: Router) {}

  Login(user: UserLogin) {
    console.log("login work");
    this.loggedUser = user;
    this.login.next(true);
  }

  Logout() {
    console.log("logout work");
    this.loggedUser = new UserLogin("", "");
    this.login.next(false);
  }

}
