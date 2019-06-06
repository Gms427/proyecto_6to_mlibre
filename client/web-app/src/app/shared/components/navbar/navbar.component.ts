import { Component, OnInit, ViewChild } from "@angular/core";
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loged = false;

  constructor() { }

  ngOnInit() { }

}
