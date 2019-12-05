import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastTileSmallComponent } from './forecast-tile-small.component';

describe('ForecastTileSmallComponent', () => {
  let component: ForecastTileSmallComponent;
  let fixture: ComponentFixture<ForecastTileSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastTileSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastTileSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
