import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationDescriptionComponent } from './publication-description.component';

describe('PublicationDescriptionComponent', () => {
  let component: PublicationDescriptionComponent;
  let fixture: ComponentFixture<PublicationDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicationDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
