import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  baseUrl: string = "http://localhost:3000";
  public static instance: TestService

  constructor(private http: HttpClient) {
    TestService.instance = this;
  }

  async test(){
    return await this.http.get(`${this.baseUrl}/test`)
      .toPromise()
      .then((res: any) => res);
  }

  verifyEmailDisponibility(email: string){
    return this.http.get(`${this.baseUrl}/verifyEmail/${email}`);
  }

  getUserInfo(email: string){
    console.log(email);
    return this.http.get(`${this.baseUrl}/getUserInfo/${email}`);
  }
}
