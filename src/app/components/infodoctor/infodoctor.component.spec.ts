import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfodoctorComponent } from './infodoctor.component';

describe('InfodoctorComponent', () => {
  let component: InfodoctorComponent;
  let fixture: ComponentFixture<InfodoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfodoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfodoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
