import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Filter } from '../utils/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  baseUrl: string = "http://localhost:3000";
  
  public obs = Observable.fromEvent(window, 'resize')

  constructor(private http: HttpClient) { }

  async getFiltersInfo(){
    return await this.http.get<Filter[]>(`${this.baseUrl}/getFiltersInfo`)
      .toPromise()
      .then(res => res);
  }
}
