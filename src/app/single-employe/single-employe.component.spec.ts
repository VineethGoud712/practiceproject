import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleEmployeComponent } from './single-employe.component';

describe('SingleEmployeComponent', () => {
  let component: SingleEmployeComponent;
  let fixture: ComponentFixture<SingleEmployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleEmployeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
