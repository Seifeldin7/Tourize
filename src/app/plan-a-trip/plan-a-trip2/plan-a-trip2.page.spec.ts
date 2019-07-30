import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanATrip2Page } from './plan-a-trip2.page';

describe('PlanATrip2Page', () => {
  let component: PlanATrip2Page;
  let fixture: ComponentFixture<PlanATrip2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanATrip2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanATrip2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
