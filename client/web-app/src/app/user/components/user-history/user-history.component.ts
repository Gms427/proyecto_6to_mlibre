import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-history',
  templateUrl: './user-history.component.html',
  styleUrls: ['./user-history.component.css']
})
export class UserHistoryComponent implements OnInit {

  public history = [1,2,3,4,5,6,7,8,9,10];
  constructor() { }

  ngOnInit() {
  }

}
