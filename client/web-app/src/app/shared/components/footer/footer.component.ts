import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  display: boolean = true;

    showDialog() {
        this.display = true;
    }

    closeDialog(){
      this.display = false;
    }

}
