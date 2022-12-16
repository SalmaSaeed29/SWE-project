import { ComponentFixture, TestBed } from '@angular/core/testing';

import { profileIComponent } from './profileI.component';

describe('profileIComponent', () => {
  let component: profileIComponent;
  let fixture: ComponentFixture<profileIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ profileIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(profileIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
