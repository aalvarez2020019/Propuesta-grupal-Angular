import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfodoctoradminComponent } from './infodoctoradmin.component';

describe('InfodoctoradminComponent', () => {
  let component: InfodoctoradminComponent;
  let fixture: ComponentFixture<InfodoctoradminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfodoctoradminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfodoctoradminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
