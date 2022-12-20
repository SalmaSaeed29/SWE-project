import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordIComponent } from './forgotPassI.component';

describe('ForgotPasswordIComponent', () => {
  let component: ForgotPasswordIComponent;
  let fixture: ComponentFixture<ForgotPasswordIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotPasswordIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
