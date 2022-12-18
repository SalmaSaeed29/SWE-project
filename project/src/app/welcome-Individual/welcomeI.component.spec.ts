import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeIComponent } from './welcomeI.component';

describe('WelcomeIComponent', () => {
  let component: WelcomeIComponent;
  let fixture: ComponentFixture<WelcomeIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
