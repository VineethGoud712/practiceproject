import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcomponentComponent } from './bcomponent.component';

describe('BcomponentComponent', () => {
  let component: BcomponentComponent;
  let fixture: ComponentFixture<BcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
