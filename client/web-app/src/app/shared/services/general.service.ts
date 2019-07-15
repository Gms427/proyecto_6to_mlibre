import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  baseUrl: string = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  async getFiltersInfo(){
    return await this.http.get<Filter[]>(`${this.baseUrl}/getFiltersInfo`)
      .toPromise()
      .then(res => res);
  }
}
