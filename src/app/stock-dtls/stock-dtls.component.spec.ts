import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockDtlsComponent } from './stock-dtls.component';

describe('StockDtlsComponent', () => {
  let component: StockDtlsComponent;
  let fixture: ComponentFixture<StockDtlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockDtlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockDtlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
