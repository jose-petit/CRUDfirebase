import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerceroPage } from './tercero.page';

describe('TerceroPage', () => {
  let component: TerceroPage;
  let fixture: ComponentFixture<TerceroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerceroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerceroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
