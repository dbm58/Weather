import { Component, OnInit } from '@angular/core';

import { ForecastDataService } from '../Services/forecast-data.service';

@Component({
  selector:    'app-home',
  templateUrl: './home.component.html',
  styleUrls:   ['./home.component.css']
})
export class HomeComponent implements OnInit
{
  forecast;

  constructor( private dataService: ForecastDataService ) { }

  ngOnInit()
  {
    this.dataService.getForecast( )
                    .subscribe(
                                ( data ) => this.forecast = data
                              );
  }
}
