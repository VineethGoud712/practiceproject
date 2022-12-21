import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDtlsComponent } from './customer-dtls.component';

describe('CustomerDtlsComponent', () => {
  let component: CustomerDtlsComponent;
  let fixture: ComponentFixture<CustomerDtlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerDtlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerDtlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
