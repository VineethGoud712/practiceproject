import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtillComponent } from './utill.component';

describe('UtillComponent', () => {
  let component: UtillComponent;
  let fixture: ComponentFixture<UtillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
