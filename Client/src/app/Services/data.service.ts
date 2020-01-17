import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map }        from "rxjs/operators";

//  See https://blog.eyas.sh/2018/12/data-and-page-content-refresh-patterns-in-angular/
//
//  use "interval( x ).takeUntil( obs )" to cancel the interval.  The timer
//  will run until "obs" emits a value.

@Injectable(
             {
               providedIn: 'root'
             }
           )
export class DataService
{
  constructor( private http: HttpClient ) { }

  getBusTimes( )
  {
    return this.http.get( 'http://localhost:3000/bus' )
                    .pipe(
                           map(
                                d =>
                                {
                                  return {
                                           prds:   d['bustime-response'].prd
                                                                        .filter( d2 => d2.stpid == '582' ),
                                           st87th: d['bustime-response'].prd
                                                                        .filter( d2 => d2.stpid == '2974' )[0],
                                           st64th: d['bustime-response'].prd
                                                                        .filter( d2 => d2.stpid == '582' )[0],
                                         };
                                }
                              )
                         )
    ;
  }

  getBusInfo( vid )
  {
  }

  getForecast( )
  {
    return this.http.get( 'http://localhost:3000/forecast' );
  }

  getTrashDay( )
  {
    return this.http.get( 'http://localhost:3000/trash' );
  }
}
