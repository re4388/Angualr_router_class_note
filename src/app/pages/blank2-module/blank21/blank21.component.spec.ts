import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Blank21Component } from './blank21.component';

describe('Blank21Component', () => {
  let component: Blank21Component;
  let fixture: ComponentFixture<Blank21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Blank21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Blank21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
