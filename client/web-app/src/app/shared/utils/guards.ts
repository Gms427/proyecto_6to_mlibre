import { Injectable } from "@angular/core";
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable()
export class ResolveUserLogged implements CanActivate {
    constructor(protected _router: Router, protected _loginService: LoginService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {  
      
      let loggedUser = this._loginService.getLoggedUser();
      if(loggedUser){
          return true;
      }else{
          this._router.navigate(['home/login']);
          return false;
      }
    }
} 


