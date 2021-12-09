import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorJsComponent } from './calculator-js.component';

describe('CalculatorJsComponent', () => {
  let component: CalculatorJsComponent;
  let fixture: ComponentFixture<CalculatorJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorJsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
