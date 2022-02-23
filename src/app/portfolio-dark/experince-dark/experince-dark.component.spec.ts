import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperinceDarkComponent } from './experince-dark.component';

describe('ExperinceDarkComponent', () => {
  let component: ExperinceDarkComponent;
  let fixture: ComponentFixture<ExperinceDarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperinceDarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperinceDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
