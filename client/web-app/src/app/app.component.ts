import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Router } from "@angular/router";
import { TestService } from './shared/services/test.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "web-app";

  constructor(private translate: TranslateService, 
              private router: Router,
              private _testService: TestService) {
    translate.setDefaultLang("en");
    translate.use("en");
  }

  async ngOnInit(){
    const t = await this._testService.test();
    console.log(t);
  }

  changeLanguage() {
    console.log(this.translate.currentLang);
    if (this.translate.currentLang == "en") {
      this.translate.use("es");
    } else {
      this.translate.use("en");
    }
  }
}
