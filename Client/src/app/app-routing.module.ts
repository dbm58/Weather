import { NgModule } from '@angular/core';
import {
         Routes,
         RouterModule
       } from '@angular/router';

import { BusComponent }          from './bus/bus.component';
import { ChartsComponent }       from './charts/charts.component';
import { HomeComponent }         from './home/home.component';
import { Home2Component }        from './home2/home2.component';
import { InfoComponent }         from './info/info.component';
import { LightningMapComponent } from './lightning-map/lightning-map.component';
import { NoaaMapComponent }      from './noaa-map/noaa-map.component';
import { PrecipComponent }       from './precip/precip.component';

const routes: Routes =
[
  { path: 'bus',          component: BusComponent          },
  { path: 'charts/:time', component: ChartsComponent       },
  { path: 'charts',       redirectTo: '/charts/0', pathMatch: 'full' },
  { path: 'home',         component: Home2Component        },
  { path: 'home2',        component: Home2Component        },
  { path: 'info',         component: InfoComponent         },
  { path: 'lightning',    component: LightningMapComponent },
  /*
  { path: 'precip',       component: NoaaMapComponent, data: { overlay: 'N1P/MKX_N1P_0.gif' } },
  { path: 'radar',        component: NoaaMapComponent, data: { overlay: 'N0R/MKX_N0R_0.gif' } },
  */
  { path: 'precip',       component: NoaaMapComponent, data: { mapUrl: 'N1P/MKX_0.png',    link: '../precip-a' } },
  { path: 'radar',        component: NoaaMapComponent, data: { mapUrl: 'NCR/MKX_0.png',    link: '../radar-a'  } },
  { path: 'precip-a',     component: NoaaMapComponent, data: { mapUrl: 'N1P/MKX_loop.gif', link: '../precip'   } },
  { path: 'radar-a',      component: NoaaMapComponent, data: { mapUrl: 'NCR/MKX_loop.gif', link: '../radar'    } },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  //  todo:  reload option doesn't appear to be working??
  imports: [ RouterModule.forRoot( routes, { onSameUrlNavigation: 'reload' } ) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
