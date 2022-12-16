import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptionListComponent } from './aList.component';

describe('AcceptionListComponent', () => {
  let component: AcceptionListComponent;
  let fixture: ComponentFixture<AcceptionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
