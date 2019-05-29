import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public password: string;
  public username: string;

  constructor() { }

  ngOnInit() {
  }

  login() {
    console.log(`The username is ${this.username}`);
    console.log(`The password is ${this.password}`);
  }
}
