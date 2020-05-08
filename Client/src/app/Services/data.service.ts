import { Injectable }  from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import { map }         from "rxjs/operators";

import { environment } from './../../environments/environment';

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
  apiBaseUrl = '';

  constructor( private http: HttpClient )
  {
    var hostname    = environment.apiHost || window.location.hostname;
    var port        = environment.apiPort;
    this.apiBaseUrl = `http://${hostname}:${port}`;

    console.log( 'baseUrl = ' + this.apiBaseUrl );
  }

  //  Should this be moved to the api code?  I'm thinking probably
  getBusTimes( )
  {
    let busStop = environment.busStopId;
    let alertBusStop = environment.alertBusStopId;

    return this.http.get( `${this.apiBaseUrl}/bus` )
                    .pipe(
                           map(
                                d =>
                                {
                                  return {
                                           prds:   d['bustime-response'].prd
                                                                        .filter( d2 => d2.stpid == busStop ),
                                           st87th: d['bustime-response'].prd
                                                                        .filter( d2 => d2.stpid == alertBusStop )[0],
                                           st64th: d['bustime-response'].prd
                                                                        .filter( d2 => d2.stpid == busStop )[0],
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
    return this.http.get( `${this.apiBaseUrl}/forecast` );
  }

  getTrashDay( )
  {
    return this.http.get( `${this.apiBaseUrl}/trash` );
  }
}
