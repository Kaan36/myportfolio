import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectFirstComponent } from './project-first.component';

describe('ProjectFirstComponent', () => {
  let component: ProjectFirstComponent;
  let fixture: ComponentFixture<ProjectFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectFirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
