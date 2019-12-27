import { Component, OnInit }  from '@angular/core';
import {interval}             from "rxjs/internal/observable/interval";
import {startWith, switchMap} from "rxjs/operators";

import { BusDataService } from '../Services/bus-data.service';

@Component(
            {
              selector:    'app-bus',
              templateUrl: './bus.component.html',
              styleUrls:   ['./bus.component.css']
            }
          )
export class BusComponent implements OnInit
{
  busTimes$;

  constructor( private dataService: BusDataService ) { }

  ngOnInit( )
  {
    this.busTimes$ =
      interval( 60 * 1000 ) // 60 seconds
        .pipe(
               startWith( 0 ),
               switchMap( ( ) => this.dataService.getBusTimes( ) )
             )
      ;
  }
}
