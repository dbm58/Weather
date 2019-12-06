import { NgModule } from '@angular/core';
import {
         Routes,
         RouterModule
       } from '@angular/router';

import { BusComponent }                 from './bus/bus.component';
import { ChartsComponent }              from './charts/charts.component';
import { InfoComponent }                from './info/info.component';
import { LightningMapComponent }        from './lightning-map/lightning-map.component';
import { NoaaMapComponent }             from './noaa-map/noaa-map.component';
import { PrecipComponent }              from './precip/precip.component';
import { TodayDetailForecastComponent } from './today-detail-forecast/today-detail-forecast.component';
import { TodayForecastComponent }       from './today-forecast/today-forecast.component';
import { WeeklyForecastComponent }      from './weekly-forecast/weekly-forecast.component';

const routes: Routes =
[
  { path: 'bus',          component: BusComponent                 },
  { path: 'charts',       component: ChartsComponent              },
  { path: 'info',         component: InfoComponent                },
  { path: 'lightning',    component: LightningMapComponent        },
  { path: 'precip',       component: NoaaMapComponent, data: { overlay: 'N1P/MKX_N1P_0.gif' } },
  { path: 'radar',        component: NoaaMapComponent, data: { overlay: 'N0R/MKX_N0R_0.gif' } },
  { path: 'today',        component: TodayForecastComponent       },
  { path: 'today-detail', component: TodayDetailForecastComponent },
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
