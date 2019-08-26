import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';
import { WebSocketSubject } from 'rxjs/observable/dom/WebSocketSubject';
import { Message, Speaker } from '../../utils/types';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  private socket$: WebSocketSubject<Message>;
  public messages: Message[] = [];
  @ViewChild("messagesContainer") messagesContainer: ElementRef;
  public Speaker = Speaker;

  constructor(private _bottomSheetRef: MatBottomSheetRef<HelpComponent>,
              private cdRef: ChangeDetectorRef,
              private spinner: NgxSpinnerService) {

    this.socket$ = new WebSocketSubject('ws://localhost:8999');
    
    this.socket$.subscribe(
      (message) => {
        this.messages.push(message);
        console.log('Message received', this.messages);
        this.spinner.hide();
        this.scrollDownChat();
        this.cdRef.detectChanges();
      }
    );
   }

  public inputChat: string

  ngOnInit() {
    this.spinner.show();
  }

  sendMessage() {
    if (this.inputChat != "") {
      /*this.messages.push(this.inputChat);
      console.log(this.messages)*/
      const message = new Message(this.inputChat, Speaker.USER);

      this.messages.push(message);
      this.socket$.next(message);
      this.inputChat = "";
      this.scrollDownChat();
    }
  }

  scrollDownChat(){
    setTimeout(() => {
      this.messagesContainer.nativeElement.scrollTo(0, 999999);
    });
  }
}


