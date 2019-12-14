import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from "@angular/router";

import * as moment from 'moment';

import { ForecastDataService } from '../Services/forecast-data.service';

@Component({
  selector:    'app-charts',
  templateUrl: './charts.component.html',
  styleUrls:   ['./charts.component.css']
})
export class ChartsComponent implements OnInit
{
  forecast;

  constructor( private route: ActivatedRoute, private dataService: ForecastDataService ) { }

  ngOnInit()
  {
    this.route
        .params
        .subscribe( params => this.filterData( params.time ) );
  }

  filterData( time )
  {
    let filterTime  = moment.unix( time );

    let filterExpr = ( time == 0 )
                   ? ( _, i ) => i < 25
                   : ( d, i ) => 
                     {
                       let mTime = moment.unix( d.time );
                       return mTime.isSame( filterTime, 'day' )
                           || mTime.subtract( 1, 'hour' ).isSame( filterTime, 'day' );
                     }

    this.dataService
        .getForecast( )
        .subscribe(
                    ( data: any ) => this.forecast = data.hourly
                                                         .data
                                                         .filter( filterExpr )
                  );
  }
}
