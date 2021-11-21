import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSellosComponent } from './editar-sellos.component';

describe('EditarSellosComponent', () => {
  let component: EditarSellosComponent;
  let fixture: ComponentFixture<EditarSellosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarSellosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarSellosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
