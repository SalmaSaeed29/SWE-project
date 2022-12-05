import { ComponentFixture, TestBed } from '@angular/core/testing';

import { profileAComponent } from './profileA.component';

describe('profileAComponent', () => {
  let component: profileAComponent;
  let fixture: ComponentFixture<profileAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ profileAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(profileAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
