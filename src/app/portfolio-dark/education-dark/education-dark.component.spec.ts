import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationDarkComponent } from './education-dark.component';

describe('EducationDarkComponent', () => {
  let component: EducationDarkComponent;
  let fixture: ComponentFixture<EducationDarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationDarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
