import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {
  public baseUrl: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getProduct(id: number){
    return this.http.get(`${this.baseUrl}product/${id}`);
  }
}
