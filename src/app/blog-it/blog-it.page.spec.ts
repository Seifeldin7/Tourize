import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogItPage } from './blog-it.page';

describe('BlogItPage', () => {
  let component: BlogItPage;
  let fixture: ComponentFixture<BlogItPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogItPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogItPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
