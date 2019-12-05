import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';

import { MomentModule }  from 'ngx-moment';
import { ChartsModule }  from 'ng2-charts';

import { AppRoutingModule }             from './app-routing.module';
import { AppComponent }                 from './app.component';
import { BrowserAnimationsModule }      from '@angular/platform-browser/animations';
import { MaterialModule }               from './material/material.module';
import { NoaaMapComponent }             from './noaa-map/noaa-map.component';
import { WeeklyForecastComponent }      from './weekly-forecast/weekly-forecast.component';
import { TodayDetailForecastComponent } from './today-detail-forecast/today-detail-forecast.component';
import { TodayForecastComponent }       from './today-forecast/today-forecast.component';
import { SetupComponent }               from './setup/setup.component';
import { PrecipComponent }              from './precip/precip.component';
import { NavButtonComponent }           from './nav-button/nav-button.component';
import { DateTimeTileComponent }        from './date-time-tile/date-time-tile.component';
import { ForecastTileComponent }        from './forecast-tile/forecast-tile.component';
import { ForecastTileSmallComponent }   from './forecast-tile-small/forecast-tile-small.component';
import { BlitzMapComponent }            from './blitz-map/blitz-map.component';
import { ConditionIconPipe }            from './Pipes/condition-icon.pipe';

import { ChartsComponent }           from './charts/charts.component';
import { TemperatureChartComponent } from './charts/temperature-chart/temperature-chart.component';
import { WindChartComponent }        from './charts/wind-chart/wind-chart.component';
import { PrecipChartComponent }      from './charts/precip-chart/precip-chart.component';

@NgModule({
  declarations:
  [
    AppComponent,
    NoaaMapComponent,
    WeeklyForecastComponent,
    TodayDetailForecastComponent,
    TodayForecastComponent,
    SetupComponent,
    PrecipComponent,
    NavButtonComponent,
    DateTimeTileComponent,
    ForecastTileComponent,
    ForecastTileSmallComponent,
    BlitzMapComponent,
    ConditionIconPipe,
    ChartsComponent,
    TemperatureChartComponent,
    WindChartComponent,
    PrecipChartComponent,
  ],
  imports:
  [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MomentModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
