import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StocklessComponent } from './stockless.component';

describe('StocklessComponent', () => {
  let component: StocklessComponent;
  let fixture: ComponentFixture<StocklessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StocklessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StocklessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
