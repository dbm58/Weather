import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable(
             {
               providedIn: 'root'
             }
           )
export class BusDataService
{
  constructor( private http: HttpClient ) { }

  getBusTimes( )
  {
    return this.http.get( 'http://localhost:3000/bus' );
  }
}
