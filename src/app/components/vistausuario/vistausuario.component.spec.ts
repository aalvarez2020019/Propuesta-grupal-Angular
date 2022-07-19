import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistausuarioComponent } from './vistausuario.component';

describe('VistausuarioComponent', () => {
  let component: VistausuarioComponent;
  let fixture: ComponentFixture<VistausuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistausuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistausuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
