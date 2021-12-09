import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasParticleComponent } from './canvas-particle.component';

describe('CanvasParticleComponent', () => {
  let component: CanvasParticleComponent;
  let fixture: ComponentFixture<CanvasParticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanvasParticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasParticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
