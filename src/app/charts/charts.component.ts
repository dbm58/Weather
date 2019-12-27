import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from "@angular/router";

import * as moment from 'moment';

import { ForecastDataService } from '../Services/forecast-data.service';

@Component(
            {
              selector:    'app-charts',
              templateUrl: './charts.component.html',
              styleUrls:   ['./charts.component.css']
            }
          )
export class ChartsComponent implements OnInit
{
  options$;
  forecast$;

  constructor(
               private route:       ActivatedRoute,
               private dataService: ForecastDataService
             ) { }

  ngOnInit( )
  {
    this.options$ = this.route.params;
    this.forecast$ = this.dataService.getForecast( );
  }
}
