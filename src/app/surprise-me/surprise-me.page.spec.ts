import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurpriseMePage } from './surprise-me.page';

describe('SurpriseMePage', () => {
  let component: SurpriseMePage;
  let fixture: ComponentFixture<SurpriseMePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurpriseMePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurpriseMePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
