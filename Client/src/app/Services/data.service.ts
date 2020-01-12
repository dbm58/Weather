import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    return this.http.get( 'http://localhost:3000/bus' );
  }

  getForecast( )
  {
    return this.http.get( 'http://localhost:3000/forecast' );
  }

  getTrashDay( )
  {
    return this.http.get( 'http://localhost:3002/trash' );
  }
}
