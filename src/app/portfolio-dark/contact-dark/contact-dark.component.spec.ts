import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDarkComponent } from './contact-dark.component';

describe('ContactDarkComponent', () => {
  let component: ContactDarkComponent;
  let fixture: ComponentFixture<ContactDarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactDarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
