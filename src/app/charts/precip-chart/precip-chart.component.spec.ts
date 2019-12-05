import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecipChartComponent } from './precip-chart.component';

describe('PrecipChartComponent', () => {
  let component: PrecipChartComponent;
  let fixture: ComponentFixture<PrecipChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrecipChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecipChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
