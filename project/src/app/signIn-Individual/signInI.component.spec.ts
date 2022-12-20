import { ComponentFixture, TestBed } from '@angular/core/testing';

import { signInIComponent } from './signInI.component';

describe('SignInIComponent', () => {
  let component: signInIComponent;
  let fixture: ComponentFixture<signInIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ signInIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(signInIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
