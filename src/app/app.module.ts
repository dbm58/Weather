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
import { ConditionIconPipe }          from './Pipes/condition-icon.pipe';
import { DateTimeTileComponent }      from './home/date-time-tile/date-time-tile.component';
import { ForecastTileComponent }      from './home/forecast-tile/forecast-tile.component';
import { ForecastTileSmallComponent } from './home/forecast-tile-small/forecast-tile-small.component';
import { HomeComponent }              from './home/home.component';
import { InfoComponent }              from './info/info.component';
import { LightningMapComponent }      from './lightning-map/lightning-map.component';
import { MaterialModule }             from './material/material.module';
import { NavButtonComponent }         from './nav-button/nav-button.component';
import { NoaaMapComponent }           from './noaa-map/noaa-map.component';
import { PrecipChartComponent }       from './charts/precip-chart/precip-chart.component';
import { PrecipComponent }            from './precip/precip.component';
import { TemperatureChartComponent }  from './charts/temperature-chart/temperature-chart.component';
import { WindChartComponent }         from './charts/wind-chart/wind-chart.component';
import { CitationComponent } from './info/citation/citation.component';
import { NoaaMapLiteComponent } from './noaa-map-lite/noaa-map-lite.component';

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
    HomeComponent,
    InfoComponent,
    LightningMapComponent,
    NavButtonComponent,
    NoaaMapComponent,
    PrecipChartComponent,
    PrecipComponent,
    TemperatureChartComponent,
    WindChartComponent,
    CitationComponent,
    NoaaMapLiteComponent,
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

