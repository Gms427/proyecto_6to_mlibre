import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  public updateNavbarColor = new Subject<string>();
  public updateNavbarColor$: Observable<string> = this.updateNavbarColor.asObservable();
  public updateNavbarPlace = new Subject<boolean>();
  public updateNavbarPlace$: Observable<boolean> = this.updateNavbarPlace.asObservable();
  public searcherInNavdar = new Subject<boolean>();
  public searcherInNavdar$: Observable<boolean> = this.searcherInNavdar.asObservable();
  public userLogged = new Subject<boolean>();
  public userLogged$: Observable<boolean> = this.userLogged.asObservable();

  constructor() { }

  UpdateNavbarColor(color: string) {
    this.updateNavbarColor.next(color);
  }

  UpdateNavdarplace(flag: boolean) {
    this.updateNavbarPlace.next(flag);
  }

  SearcherInNavdar(searcherFlag: boolean) {
    this.searcherInNavdar.next(searcherFlag);
  }

  UserLogged(logged: boolean) {
    this.userLogged.next(logged);
  }
}
