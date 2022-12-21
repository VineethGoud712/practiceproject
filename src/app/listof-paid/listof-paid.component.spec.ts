import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofPaidComponent } from './listof-paid.component';

describe('ListofPaidComponent', () => {
  let component: ListofPaidComponent;
  let fixture: ComponentFixture<ListofPaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofPaidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListofPaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
