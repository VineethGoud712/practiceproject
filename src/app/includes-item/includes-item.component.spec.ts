import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncludesItemComponent } from './includes-item.component';

describe('IncludesItemComponent', () => {
  let component: IncludesItemComponent;
  let fixture: ComponentFixture<IncludesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncludesItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncludesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
