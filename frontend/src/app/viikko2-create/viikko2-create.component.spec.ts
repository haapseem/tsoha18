import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viikko2CreateComponent } from './viikko2-create.component';

describe('Viikko2CreateComponent', () => {
  let component: Viikko2CreateComponent;
  let fixture: ComponentFixture<Viikko2CreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viikko2CreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viikko2CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
