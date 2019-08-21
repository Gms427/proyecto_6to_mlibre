import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<HelpComponent>) { }

  messages = []
  public inputChat: string

  ngOnInit() {

  }

  sendMessage() {
    if (this.inputChat != "") {
      this.messages.push(this.inputChat);
      console.log(this.messages)
    }
  }

}
