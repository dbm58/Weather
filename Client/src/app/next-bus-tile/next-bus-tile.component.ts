import { Component, OnInit }    from '@angular/core';
import { interval }             from "rxjs/internal/observable/interval";
import {
         startWith,
         switchMap,
         takeWhile
       } from "rxjs/operators";

import { DataService }          from '../Services/data.service';

@Component(
            {
              selector:    'app-next-bus-tile',
              templateUrl: './next-bus-tile.component.html',
              styleUrls:   ['./next-bus-tile.component.css']
            }
          )
export class NextBusTileComponent
{
  constructor( private dataService: DataService ) { }

  private readonly autoRefresh$ =
    interval( 60 * 1000 ) // 60 seconds
      .pipe( startWith( 0 ) );

  private readonly busTimes$ =
    this.autoRefresh$
        .pipe(
               takeWhile(
                          ( _ ) =>
                          { 
                            let hrs = ( new Date( ) ).getHours( );
                            return ( hrs >= 4 && hrs <= 7 );
                          }
                        ),
               switchMap( ( ) => this.dataService.getBusTimes( ) )
             );
}
