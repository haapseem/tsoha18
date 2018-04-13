import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viikko2Component } from './viikko2.component';

describe('Viikko2Component', () => {
  let component: Viikko2Component;
  let fixture: ComponentFixture<Viikko2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viikko2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viikko2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
