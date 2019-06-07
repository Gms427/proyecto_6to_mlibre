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
  public isInLogin: boolean = false;

  public login = new Subject<boolean>();
  public inLogin = new Subject<boolean>();  
  public login$: Observable<boolean> = this.login.asObservable();
  public inLogin$: Observable<boolean> = this.inLogin.asObservable();

  public showNavbar = new Subject<boolean>();
  public showNavbar$: Observable<boolean> = this.showNavbar.asObservable(); 
  
  constructor(private router: Router) {}

  Login(user: UserLogin) {
    console.log("login work");
    this.loggedUser = user;
    this.isLogged = true;
    this.login.next(true);
    this.isInLogin = false;
    this.inLogin.next(false);
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

  userIsLogin() {
    console.log("work");
    this.isInLogin = true;
    this.inLogin.next(true);
  }

  ShowNavbar(){
    this.showNavbar.next(true);
  }

  HideNavbar(){
    this.showNavbar.next(false);
  }
}
