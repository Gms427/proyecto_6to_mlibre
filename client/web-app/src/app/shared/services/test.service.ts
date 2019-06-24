import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  baseUrl: string = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  test(){
    return this.http.get(`${this.baseUrl}/test`).toPromise().then((res: any) => res);
  }
}
