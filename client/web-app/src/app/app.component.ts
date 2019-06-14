import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "web-app";

  constructor(private translate: TranslateService, private router: Router) {
    translate.setDefaultLang("en");
    translate.use("en");
  }

  changeLanguage() {
    console.log(this.translate.currentLang);
    if (this.translate.currentLang == "en") {
      this.translate.use("es");
    } else {
      this.translate.use("en");
    }
  }

  navegateToList() {
    this.router.navigate(["/home/list"]);
  }
}
