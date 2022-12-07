import { ComponentFixture, TestBed } from '@angular/core/testing';

import { signUpAComponent } from './signUpA.component';

describe('SignUpAComponent', () => {
  let component: signUpAComponent;
  let fixture: ComponentFixture<signUpAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ signUpAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(signUpAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
