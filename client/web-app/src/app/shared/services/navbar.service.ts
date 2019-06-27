import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  public updateNavbarColor = new Subject<string>();  
  public updateNavbarColor$: Observable<string> = this.updateNavbarColor.asObservable();

  constructor() { }

  UpdateNavbarColor(color: string){
    this.updateNavbarColor.next(color);
  }
}
