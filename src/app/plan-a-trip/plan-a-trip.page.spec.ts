import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanATripPage } from './plan-a-trip.page';

describe('PlanATripPage', () => {
  let component: PlanATripPage;
  let fixture: ComponentFixture<PlanATripPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanATripPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanATripPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
