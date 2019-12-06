import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForecastDataService
{
  data;

  constructor( private http: HttpClient ) { }

  getForecast( )
  {
    return this.http.get( 'http://localhost:3000/forecast' );
  }
}
