import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbManagmentComponent } from './db-managment.component';

describe('DbManagmentComponent', () => {
  let component: DbManagmentComponent;
  let fixture: ComponentFixture<DbManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DbManagmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DbManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
