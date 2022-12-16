import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAComponent } from './EditA.component';

describe('EditAComponent', () => {
  let component: EditAComponent;
  let fixture: ComponentFixture<EditAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

