import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasStrokeComponent } from './canvas-stroke.component';

describe('CanvasStrokeComponent', () => {
  let component: CanvasStrokeComponent;
  let fixture: ComponentFixture<CanvasStrokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanvasStrokeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasStrokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
