import { BrowserModule }           from '@angular/platform-browser';
import { HttpClientModule }        from '@angular/common/http';
import { NgModule }                from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ChartsModule } from 'ng2-charts';
import { MomentModule } from 'ngx-moment';

import { AppComponent }               from './app.component';
import { AppRoutingModule }           from './app-routing.module';
import { BusComponent }               from './bus/bus.component';
import { ChartsComponent }            from './charts/charts.component';
import { CitationComponent }          from './info/citation/citation.component';
import { ConditionIconPipe }          from './Pipes/condition-icon.pipe';
import { DateTimeTileComponent }      from './home/date-time-tile/date-time-tile.component';
import { FilterByDatePipe }           from './Pipes/filter-by-date.pipe';
import { ForecastTileComponent }      from './home/forecast-tile/forecast-tile.component';
import { ForecastTileSmallComponent } from './home/forecast-tile-small/forecast-tile-small.component';
import { Home2Component }             from './home2/home2.component';
import { HomeComponent }              from './home/home.component';
import { InfoComponent }              from './info/info.component';
import { LightningMapComponent }      from './lightning-map/lightning-map.component';
import { MaterialModule }             from './material/material.module';
import { NavButtonComponent }         from './nav-button/nav-button.component';
import { NextBusTileComponent }       from './next-bus-tile/next-bus-tile.component';
import { NoaaMapComponent }           from './noaa-map/noaa-map.component';
import { NoaaMapLiteComponent }       from './noaa-map-lite/noaa-map-lite.component';
import { NoaaUrlPipe }                from './Pipes/noaa-url.pipe';
import { PrecipChartComponent }       from './charts/precip-chart/precip-chart.component';
import { PrecipComponent }            from './precip/precip.component';
import { TemperatureChartComponent }  from './charts/temperature-chart/temperature-chart.component';
import { WindChartComponent }         from './charts/wind-chart/wind-chart.component';


@NgModule({
  declarations:
  [
    AppComponent,
    BusComponent,
    ChartsComponent,
    CitationComponent,
    ConditionIconPipe,
    DateTimeTileComponent,
    FilterByDatePipe,
    ForecastTileComponent,
    ForecastTileSmallComponent,
    Home2Component,
    HomeComponent,
    InfoComponent,
    LightningMapComponent,
    NavButtonComponent,
    NextBusTileComponent,
    NoaaMapComponent,
    NoaaMapLiteComponent,
    NoaaUrlPipe,
    PrecipChartComponent,
    PrecipComponent,
    TemperatureChartComponent,
    WindChartComponent,
  ],
  imports:
  [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ChartsModule,
    HttpClientModule,
    MaterialModule,
    MomentModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

