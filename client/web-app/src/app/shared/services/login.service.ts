import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { UserLogin } from "src/app/home/models/UserLogin";
import { Router, NavigationEnd } from "@angular/router";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class LoginService {
  baseUrl: string = "http://localhost:3000";
  private loggedUser: UserLogin;
  public login = new Subject<boolean>();
  public login$: Observable<boolean> = this.login.asObservable();

  constructor(private router: Router,
              private http: HttpClient) {}

  Login(user: UserLogin) {
    return this.http.post(`${this.baseUrl}/login`, user);
    this.loggedUser = user;
    this.login.next(true);
  }

  Logout() {
    this.loggedUser = new UserLogin("", "");
    this.login.next(false);
  }

  getLoggedUser(): UserLogin{
    return this.loggedUser;
  }

  setLoggedUser(value: UserLogin){
    this.loggedUser = value;
  }

  checkPassword(user: UserLogin){
    return this.http.post(`${this.baseUrl}/checkPassword`, user);    
  }

}
