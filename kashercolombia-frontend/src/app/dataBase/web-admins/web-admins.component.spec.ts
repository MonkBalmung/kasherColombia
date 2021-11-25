import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebAdminsComponent } from './web-admins.component';

describe('WebAdminsComponent', () => {
  let component: WebAdminsComponent;
  let fixture: ComponentFixture<WebAdminsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebAdminsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebAdminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
