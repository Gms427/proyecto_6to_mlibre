import { Component, OnInit } from '@angular/core';
import { UserSignin } from '../../models/UserSignin';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  public userData: UserSignin = new UserSignin();


  constructor() { }

  ngOnInit() {
  }


  signin() {
    console.log(this.userData);
  }
}
