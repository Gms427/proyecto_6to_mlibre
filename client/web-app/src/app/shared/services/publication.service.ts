import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category, Publication, Filter } from '../utils/types';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {
  public baseUrl: string = 'http://localhost:3000';
  public categories: Category[];

  constructor(private http: HttpClient,
              private _loginService: LoginService) { 
    this.getCategories();
  }

  getProduct(id: number){
    return this.http.get(`${this.baseUrl}/product/${id}`);
  }

  async getProducts(search: string): Promise<Publication[]>{
    return await this.http.get(`${this.baseUrl}/getProducts/${search}`)
      .toPromise()
      .then((r: Publication[]) => r);
  }

  async getAllProducts(): Promise<Publication[]>{
    return await this.http.get(`${this.baseUrl}/getProducts`)
      .toPromise()
      .then((r: Publication[]) => r);
  }
  
  async getCategories(): Promise<Category[]> {
    if(this.categories){
      return this.categories;
    }else{
     return await this.http.get(`${this.baseUrl}/getCategories`)
      .toPromise()
      .then((r: Category []) => {
        this.categories = r;
        return r;
      });
    }
  }

  async getSubcategoryFields(idSubcategory: number, idCategory: number): Promise<Filter[]> {
    return await this.http.get(`${this.baseUrl}/getSubcategoryFields/${idSubcategory}/${idCategory}`)
      .toPromise()
      .then((r: Filter[]) => {
        return r;
      });
  }

  async getHistory(): Promise<Publication[]>{
    let emailCurrentUser = this._loginService.getLoggedUser().Email;
    return await this.http.get(`${this.baseUrl}/history/${emailCurrentUser}`)
      .toPromise()
      .then((r: Publication[]) => r);
  }
}
