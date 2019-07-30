import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecidePage } from './decide.page';

describe('DecidePage', () => {
  let component: DecidePage;
  let fixture: ComponentFixture<DecidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecidePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
