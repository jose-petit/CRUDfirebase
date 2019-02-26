import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuintoAPage } from './quinto-a.page';

describe('QuintoAPage', () => {
  let component: QuintoAPage;
  let fixture: ComponentFixture<QuintoAPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuintoAPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuintoAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
