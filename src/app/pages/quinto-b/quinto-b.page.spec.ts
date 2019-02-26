import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuintoBPage } from './quinto-b.page';

describe('QuintoBPage', () => {
  let component: QuintoBPage;
  let fixture: ComponentFixture<QuintoBPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuintoBPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuintoBPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
