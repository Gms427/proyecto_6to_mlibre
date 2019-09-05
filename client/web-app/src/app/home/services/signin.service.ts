import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserSignin } from '../models/UserSignin';
import { UserInfo } from 'src/app/shared/utils/types';

@Injectable({
  providedIn: 'root'
})
export class SigninService {
  baseUrl: string = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  Signin(user: UserSignin){
    return this.http.post('http://localhost:3000/signin', user);
  }

  UpdateData(user: UserInfo){
    return this.http.put(`${this.baseUrl}/updateUser`, user);
  }
}
