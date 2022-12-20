import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordAComponent } from './forgotPassA.component';

describe('ForgotPasswordAComponent', () => {
  let component: ForgotPasswordAComponent;
  let fixture: ComponentFixture<ForgotPasswordAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotPasswordAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
