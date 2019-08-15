import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Filter } from '../utils/types';
import { fromEvent } from 'rxjs';
import { Filter, Category } from '../utils/types';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  baseUrl: string = "http://localhost:3000";
  
  public obs = fromEvent(window, 'resize')

  private categoryForCreate: Category;

  constructor(private http: HttpClient) { }

  async getFiltersInfo(){
    return await this.http.get<Filter[]>(`${this.baseUrl}/getFiltersInfo`)
      .toPromise()
      .then(res => res);
  }

  getCategoryForCreate(){
    return this.categoryForCreate;
  }

  setCategoryForCreate(value: Category){
    this.categoryForCreate = value;
  }
}
