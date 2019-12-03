import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayDetailForecastComponent } from './today-detail-forecast.component';

describe('TodayDetailForecastComponent', () => {
  let component: TodayDetailForecastComponent;
  let fixture: ComponentFixture<TodayDetailForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodayDetailForecastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayDetailForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
