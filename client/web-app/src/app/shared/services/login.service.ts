import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { UserLogin } from 'src/app/home/models/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //public login = new Subject<void>();
  //public loginState$: Observable<void> = this.login.asObservable();

  //public logout = new Subject<void>();
  //public logoutState$: Observable<void> = this.logout.asObservable();

  public loggedUser: UserLogin = new UserLogin("","");
  public isLogged: boolean = false;

  public login = new Subject<boolean>();
  public login$: Observable<boolean> = this.login.asObservable();

  constructor() { }

  Login(user: UserLogin) {
    console.log('login work');
    this.loggedUser = user;
    this.isLogged = true;
    this.login.next(true);
  }

  Logout() {
    console.log('logout work');
    this.loggedUser = new UserLogin("", "");
    this.isLogged = false;
    this.login.next(false);
  }

  getIsLogged(){
    return this.isLogged;
  }
}
