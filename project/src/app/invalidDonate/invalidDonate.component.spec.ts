import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidDonateComponent } from './invalidDonate.component';

describe('InvalidDonateComponent', () => {
  let component: InvalidDonateComponent;
  let fixture: ComponentFixture<InvalidDonateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvalidDonateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvalidDonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
