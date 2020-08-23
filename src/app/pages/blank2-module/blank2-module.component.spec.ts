import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Blank2ModuleComponent } from './blank2-module.component';

describe('Blank2ModuleComponent', () => {
  let component: Blank2ModuleComponent;
  let fixture: ComponentFixture<Blank2ModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Blank2ModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Blank2ModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
