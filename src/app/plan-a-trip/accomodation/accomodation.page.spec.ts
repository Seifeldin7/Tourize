import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomodationPage } from './accomodation.page';

describe('AccomodationPage', () => {
  let component: AccomodationPage;
  let fixture: ComponentFixture<AccomodationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccomodationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccomodationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
