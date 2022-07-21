import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistadoctorComponent } from './vistadoctor.component';

describe('VistadoctorComponent', () => {
  let component: VistadoctorComponent;
  let fixture: ComponentFixture<VistadoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistadoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistadoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
