import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { UserLogin } from "src/app/home/models/UserLogin";
import { Router, NavigationEnd } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { NavbarService } from './navbar.service';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: "root"
})
export class LoginService {
  baseUrl: string = "http://localhost:3000";
  private loggedUser: UserLogin;
  public login = new Subject<boolean>();
  public login$: Observable<boolean> = this.login.asObservable();

  constructor(private router: Router,
              private http: HttpClient,
              private _navbarService: NavbarService) {

    console.log("Logged User --> ", JSON.parse(localStorage.getItem('loggedUser')));
    this.loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
    if(this.loggedUser){
      this._navbarService.UserLogged(true);
    }
  }

  Login(user: UserLogin) {
    return this.http.post(`${this.baseUrl}/login`, user);
    this.loggedUser = user;
    this.login.next(true);
  }

  Logout() {
    this.loggedUser = new UserLogin("", "");
    localStorage.removeItem('loggedUser');
    this._navbarService.UserLogged(false);
  }

  getLoggedUser(): UserLogin{
    return this.loggedUser;
  }

  setLoggedUser(value: UserLogin){
    this.loggedUser = value;
    localStorage.setItem('loggedUser', JSON.stringify(this.loggedUser));
  }

  checkPassword(pass: any, user: any){
    return this.http.post(`${this.baseUrl}/checkPassword`, {pass, user});    
  }

}
