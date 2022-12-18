import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeAComponent } from './welcomeA.component';

describe('WelcomeAComponent', () => {
  let component: WelcomeAComponent;
  let fixture: ComponentFixture<WelcomeAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
