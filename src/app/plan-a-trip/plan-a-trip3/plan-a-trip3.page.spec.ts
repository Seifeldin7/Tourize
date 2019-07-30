import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanATrip3Page } from './plan-a-trip3.page';

describe('PlanATrip3Page', () => {
  let component: PlanATrip3Page;
  let fixture: ComponentFixture<PlanATrip3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanATrip3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanATrip3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
