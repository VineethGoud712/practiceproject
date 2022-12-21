import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiSingledtaComponent } from './api-singledta.component';

describe('ApiSingledtaComponent', () => {
  let component: ApiSingledtaComponent;
  let fixture: ComponentFixture<ApiSingledtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiSingledtaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiSingledtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
