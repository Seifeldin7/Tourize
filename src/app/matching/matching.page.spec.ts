import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchingPage } from './matching.page';

describe('MatchingPage', () => {
  let component: MatchingPage;
  let fixture: ComponentFixture<MatchingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
