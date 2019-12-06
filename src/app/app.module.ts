import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';

import { ChartsModule }  from 'ng2-charts';
import { MomentModule }  from 'ngx-moment';

import { AppComponent }                 from './app.component';
import { AppRoutingModule }             from './app-routing.module';
import { BrowserAnimationsModule }      from '@angular/platform-browser/animations';
import { BusComponent }                 from './bus/bus.component';
import { ChartsComponent }              from './charts/charts.component';
import { ConditionIconPipe }            from './Pipes/condition-icon.pipe';
import { DateTimeTileComponent }        from './date-time-tile/date-time-tile.component';
import { ForecastTileComponent }        from './forecast-tile/forecast-tile.component';
import { ForecastTileSmallComponent }   from './forecast-tile-small/forecast-tile-small.component';
import { InfoComponent }                from './info/info.component';
import { LightningMapComponent }        from './lightning-map/lightning-map.component';
import { MaterialModule }               from './material/material.module';
import { NavButtonComponent }           from './nav-button/nav-button.component';
import { NoaaMapComponent }             from './noaa-map/noaa-map.component';
import { PrecipChartComponent }         from './charts/precip-chart/precip-chart.component';
import { PrecipComponent }              from './precip/precip.component';
import { TemperatureChartComponent }    from './charts/temperature-chart/temperature-chart.component';
import { TodayDetailForecastComponent } from './today-detail-forecast/today-detail-forecast.component';
import { TodayForecastComponent }       from './today-forecast/today-forecast.component';
import { WeeklyForecastComponent }      from './weekly-forecast/weekly-forecast.component';
import { WindChartComponent }           from './charts/wind-chart/wind-chart.component';

@NgModule({
  declarations:
  [
    AppComponent,
    BusComponent,
    ChartsComponent,
    ConditionIconPipe,
    DateTimeTileComponent,
    ForecastTileComponent,
    ForecastTileSmallComponent,
    InfoComponent,
    LightningMapComponent,
    NavButtonComponent,
    NoaaMapComponent,
    PrecipChartComponent,
    PrecipComponent,
    TemperatureChartComponent,
    TodayDetailForecastComponent,
    TodayForecastComponent,
    WeeklyForecastComponent,
    WindChartComponent,
  ],
  imports:
  [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ChartsModule,
    MaterialModule,
    MomentModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

