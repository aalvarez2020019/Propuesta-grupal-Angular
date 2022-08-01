import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditardoctorComponent } from './editardoctor.component';

describe('EditardoctorComponent', () => {
  let component: EditardoctorComponent;
  let fixture: ComponentFixture<EditardoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditardoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditardoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
