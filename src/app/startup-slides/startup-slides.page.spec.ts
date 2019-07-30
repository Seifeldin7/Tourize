import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupSlidesPage } from './startup-slides.page';

describe('StartupSlidesPage', () => {
  let component: StartupSlidesPage;
  let fixture: ComponentFixture<StartupSlidesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartupSlidesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupSlidesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
