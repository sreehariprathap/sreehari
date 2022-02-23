import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksDarkComponent } from './works-dark.component';

describe('WorksDarkComponent', () => {
  let component: WorksDarkComponent;
  let fixture: ComponentFixture<WorksDarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorksDarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
