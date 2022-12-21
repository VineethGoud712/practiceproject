import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerDtlsComponent } from './buyer-dtls.component';

describe('BuyerDtlsComponent', () => {
  let component: BuyerDtlsComponent;
  let fixture: ComponentFixture<BuyerDtlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerDtlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyerDtlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
