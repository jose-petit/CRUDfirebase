import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeroPage } from './primero.page';

describe('PrimeroPage', () => {
  let component: PrimeroPage;
  let fixture: ComponentFixture<PrimeroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
