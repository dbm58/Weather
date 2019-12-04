import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';

import { MomentModule }  from 'ngx-moment';

import { AppRoutingModule }             from './app-routing.module';
import { AppComponent }                 from './app.component';
import { BrowserAnimationsModule }      from '@angular/platform-browser/animations';
import { MaterialModule }               from './material/material.module';
import { RadarComponent }               from './radar/radar.component';
import { WeeklyForecastComponent }      from './weekly-forecast/weekly-forecast.component';
import { TodayDetailForecastComponent } from './today-detail-forecast/today-detail-forecast.component';
import { TodayForecastComponent }       from './today-forecast/today-forecast.component';
import { SetupComponent }               from './setup/setup.component';
import { PrecipComponent }              from './precip/precip.component';
import { NavButtonComponent }           from './nav-button/nav-button.component';
import { DateTimeTileComponent }        from './date-time-tile/date-time-tile.component';

@NgModule({
  declarations:
  [
    AppComponent,
    RadarComponent,
    WeeklyForecastComponent,
    TodayDetailForecastComponent,
    TodayForecastComponent,
    SetupComponent,
    PrecipComponent,
    NavButtonComponent,
    DateTimeTileComponent
  ],
  imports:
  [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MomentModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
