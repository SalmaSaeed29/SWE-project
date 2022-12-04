import { ComponentFixture, TestBed } from '@angular/core/testing';

import { signUpIComponent } from './signUpI.component';

describe('SignInAComponent', () => {
  let component: signUpIComponent;
  let fixture: ComponentFixture<signUpIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ signUpIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(signUpIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
