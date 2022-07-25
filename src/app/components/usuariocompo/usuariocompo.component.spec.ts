import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariocompoComponent } from './usuariocompo.component';

describe('UsuariocompoComponent', () => {
  let component: UsuariocompoComponent;
  let fixture: ComponentFixture<UsuariocompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariocompoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariocompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
