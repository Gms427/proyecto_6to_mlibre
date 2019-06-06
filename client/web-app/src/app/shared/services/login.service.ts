import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { UserLogin } from 'src/app/home/models/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public login = new Subject<void>();
  public loginState$: Observable<void> = this.login.asObservable();

  public logout = new Subject<void>();
  public logoutState$: Observable<void> = this.logout.asObservable();

  public loggedUser: UserLogin = new UserLogin("","");
  public isLogged: boolean = false;

  constructor() { }

  test(){
    console.log('test work');
  }

  loginUser(user: UserLogin){
    this.loggedUser = user;
    this.isLogged = true;
    this.login.next();
  }

  logoutUser(){
    this.loggedUser = new UserLogin("","");
    this.isLogged = false;
    this.logout.next();
  }

  getIsLogged(){
    return this.isLogged;
  }
}
