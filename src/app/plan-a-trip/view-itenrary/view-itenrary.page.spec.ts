import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewItenraryPage } from './view-itenrary.page';

describe('ViewItenraryPage', () => {
  let component: ViewItenraryPage;
  let fixture: ComponentFixture<ViewItenraryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewItenraryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewItenraryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
