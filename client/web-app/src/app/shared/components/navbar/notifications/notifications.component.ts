import { Component, OnInit } from "@angular/core";
import { Notifications } from "./notifications";

@Component({
  selector: "app-notifications",
  templateUrl: "./notifications.component.html",
  styleUrls: ["./notifications.component.css"]
})
export class NotificationsComponent implements OnInit {
  notificationsLength: string;
  notificationsList: Notifications[] = [
    {
      id: 1,
      name: "Chevrolet Celta 1.0 full",
      question: "asdasdas a das d a das das d?",
      answer: "asasdasd asd as das d as d",
      img: "https://mlu-s1-p.mlstatic.com/700820-MLU29200013016_012019-T.jpg"
    },
    {
      id: 2,
      name: "Chevrolet Celta 1.0 full",
      question: "asdasdas a das d a das das d?",
      answer: "asasdasd asd as das d as d",
      img: "https://mlu-s1-p.mlstatic.com/700820-MLU29200013016_012019-T.jpg"
    },
    {
      id: 3,
      name: "Chevrolet Celta 1.0 full",
      question: "asdasdas a das d a das das d?",
      answer: "asasdasd asd as das d as d",
      img: "https://mlu-s1-p.mlstatic.com/700820-MLU29200013016_012019-T.jpg"
    }
  ];

  constructor() {}

  ngOnInit() {
    this.notificationsLength = this.notificationsList.length.toString();
  }

  deleteNotifications(){
    this.notificationsLength = '';
  }
}
