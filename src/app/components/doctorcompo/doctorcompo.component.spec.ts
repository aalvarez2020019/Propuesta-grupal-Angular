import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorcompoComponent } from './doctorcompo.component';

describe('DoctorcompoComponent', () => {
  let component: DoctorcompoComponent;
  let fixture: ComponentFixture<DoctorcompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorcompoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorcompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
