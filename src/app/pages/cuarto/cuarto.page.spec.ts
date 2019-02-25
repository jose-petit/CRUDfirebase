import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuartoPage } from './cuarto.page';

describe('CuartoPage', () => {
  let component: CuartoPage;
  let fixture: ComponentFixture<CuartoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuartoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuartoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
