import { NgModule } from '@angular/core';
import {
         Routes,
         RouterModule
       } from '@angular/router';

import { NoaaMapComponent }             from './noaa-map/noaa-map.component';
import { BlitzMapComponent }            from './blitz-map/blitz-map.component';
import { PrecipComponent }              from './precip/precip.component';
import { WeeklyForecastComponent }      from './weekly-forecast/weekly-forecast.component';
import { TodayDetailForecastComponent } from './today-detail-forecast/today-detail-forecast.component';
import { TodayForecastComponent }       from './today-forecast/today-forecast.component';
import { SetupComponent }               from './setup/setup.component';

const routes: Routes = [
  { path: 'today',        component: TodayForecastComponent       },
  { path: 'radar',        component: NoaaMapComponent, data: { overlay: 'N0R/MKX_N0R_0.gif' } },
  { path: 'precip',       component: NoaaMapComponent, data: { overlay: 'N1P/MKX_N1P_0.gif' } },
  { path: 'lightning',    component: BlitzMapComponent            },
  { path: 'today-detail', component: TodayDetailForecastComponent },
  { path: 'setup',        component: SetupComponent               },
  { path: 'week',         component: WeeklyForecastComponent      },
  { path: '',
    redirectTo: '/today',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
