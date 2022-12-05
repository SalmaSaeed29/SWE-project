import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditIComponent } from './EditI.component';

describe('EditIComponent', () => {
  let component: EditIComponent;
  let fixture: ComponentFixture<EditIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
