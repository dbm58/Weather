import { Component }      from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import * as moment from 'moment';

import { DataService } from '../Services/data.service';

@Component(
            {
              selector:    'app-charts',
              templateUrl: './charts.component.html',
              styleUrls:   ['./charts.component.css']
            }
          )
export class ChartsComponent
{
  constructor(
               private route:       ActivatedRoute,
               private dataService: DataService
             ) { }

  private readonly options$ = this.route.params;

  private readonly forecast$ = this.dataService.getForecast( );
}
