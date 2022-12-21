import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicRow2Component } from './dynamic-row2.component';

describe('DynamicRow2Component', () => {
  let component: DynamicRow2Component;
  let fixture: ComponentFixture<DynamicRow2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicRow2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicRow2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
