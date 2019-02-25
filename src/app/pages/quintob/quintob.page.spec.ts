import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuintobPage } from './quintob.page';

describe('QuintobPage', () => {
  let component: QuintobPage;
  let fixture: ComponentFixture<QuintobPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuintobPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuintobPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
