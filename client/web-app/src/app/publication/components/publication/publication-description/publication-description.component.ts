import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publication-description',
  templateUrl: './publication-description.component.html',
  styleUrls: ['./publication-description.component.css']
})
export class PublicationDescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}
