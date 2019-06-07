import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { UserLogin } from "src/app/home/models/UserLogin";
import { Router, NavigationEnd } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  public loggedUser: UserLogin = new UserLogin("", "");
  public isLogged: boolean = false;
  private previousUrl: string = "/home/login";
  private currentUrl: string;

  public login = new Subject<boolean>();
  public login$: Observable<boolean> = this.login.asObservable();
  public previousUrl$: Observable<boolean> = this.login.asObservable();

  constructor(private router: Router) {
    this.currentUrl = this.router.url;
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.previousUrl = this.currentUrl;
        this.currentUrl = event.url;
      }
    });
  }

  Login(user: UserLogin) {
    console.log("login work");
    this.loggedUser = user;
    this.isLogged = true;
    this.login.next(true);
  }

  Logout() {
    console.log("logout work");
    this.loggedUser = new UserLogin("", "");
    this.isLogged = false;
    this.login.next(false);
  }

  getIsLogged() {
    return this.isLogged;
  }

  getPreviousUrl() {
    return this.previousUrl;
  }
}
