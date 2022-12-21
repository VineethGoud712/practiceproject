import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeejobApComponent } from './employeejob-ap.component';

describe('EmployeejobApComponent', () => {
  let component: EmployeejobApComponent;
  let fixture: ComponentFixture<EmployeejobApComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeejobApComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeejobApComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
