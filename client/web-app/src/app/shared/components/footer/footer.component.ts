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

  display: boolean = false;

    showDialog() {
        this.display = true;
    }

    closeDialog(){
      this.display = false;
    }

    onResize(event){
      console.log('aver si anda', event);
      if(event.target.innerWidth < 780){
        this.showDialog();
      }else{
        this.closeDialog();
      }
    }
}
