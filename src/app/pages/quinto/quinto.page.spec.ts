import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuintoPage } from './quinto.page';

describe('QuintoPage', () => {
  let component: QuintoPage;
  let fixture: ComponentFixture<QuintoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuintoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuintoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
