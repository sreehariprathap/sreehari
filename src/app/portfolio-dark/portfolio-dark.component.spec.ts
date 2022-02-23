import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioDarkComponent } from './portfolio-dark.component';

describe('PortfolioDarkComponent', () => {
  let component: PortfolioDarkComponent;
  let fixture: ComponentFixture<PortfolioDarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioDarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
