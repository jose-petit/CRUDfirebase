import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoPage } from './segundo.page';

describe('SegundoPage', () => {
  let component: SegundoPage;
  let fixture: ComponentFixture<SegundoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegundoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
