import { ComponentFixture, TestBed } from '@angular/core/testing';

import { signInAComponent } from './signInA.component';

describe('SignInAComponent', () => {
  let component: signInAComponent;
  let fixture: ComponentFixture<signInAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ signInAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(signInAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
