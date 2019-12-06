import { Component, OnInit } from '@angular/core';
import { ForecastDataService } from '../Services/forecast-data.service';

@Component({
  selector: 'app-today-forecast',
  templateUrl: './today-forecast.component.html',
  styleUrls: ['./today-forecast.component.css']
})
export class TodayForecastComponent implements OnInit {

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
