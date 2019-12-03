import { NgModule } from '@angular/core';
import {
         Routes,
         RouterModule
       } from '@angular/router';

import { RadarComponent }               from './radar/radar.component';
import { PrecipComponent }              from './precip/precip.component';
import { WeeklyForecastComponent }      from './weekly-forecast/weekly-forecast.component';
import { TodayDetailForecastComponent } from './today-detail-forecast/today-detail-forecast.component';
import { TodayForecastComponent }       from './today-forecast/today-forecast.component';
import { SetupComponent }               from './setup/setup.component';

const routes: Routes = [
  { path: 'today',  component: TodayForecastComponent  },
  { path: 'radar',  component: RadarComponent          },
  { path: 'precip', component: PrecipComponent         },
  { path: 'week',   component: WeeklyForecastComponent },
  { path: 'setup',  component: SetupComponent          },
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
