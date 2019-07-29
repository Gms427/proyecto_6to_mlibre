import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../utils/types';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {
  public baseUrl: string = 'http://localhost:3000';
  public categories: Category[];

  constructor(private http: HttpClient,
              private _publicationService: PublicationService) { 
    this.getCategories();
  }

  getProduct(id: number){
    return this.http.get(`${this.baseUrl}/product/${id}`);
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
}
