import { Component, OnInit } from '@angular/core';
import { TestService } from '../../../shared/services/test.service';


@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit {

  constructor(private _TestService: TestService) { }

  ngOnInit() {
  }

  getInformation(){
    this._TestService.getUserInfo()
  }

}
