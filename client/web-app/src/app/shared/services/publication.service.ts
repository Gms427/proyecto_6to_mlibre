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

  getCategories(){
    console.log("1", this.categories);
    if(this.categories){
      console.log("2.1", this.categories);
      return this.categories;
    }else{
      console.log("2.2", this.categories);
      return this.http.get(`${this.baseUrl}/getCategories`)
      .toPromise()
      .then(r => {
        this.categories = r;
        return r;
      });
    }
  }
}
