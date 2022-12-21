import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcomponentComponent } from './acomponent.component';

describe('AcomponentComponent', () => {
  let component: AcomponentComponent;
  let fixture: ComponentFixture<AcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
